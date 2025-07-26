---
title: hammerspoon - swap esc and backtick
category: hammerspoon
tags: hammerspoon lua HHKB
---

- I'm really familiar with vim and HHKB, HappyHacking Keyboard. I'm not sure if you know the the feature of HHKB, ESC key is located just left of the number 1 position. It is a little weird in terms of general keyboard, because in general keyboard, ESC keyboard is located in upper left of the number 1 position, and then backtick keyboard is located in the just left of the number 1 key.
- As a vim enthusiast, HHKB pattern is really useful to me. But problem happend when I didn't bring my own HHKB keyboard, I frequently type backtick when I want to type ESC because of the already familary typing rounting or habit.
- I want to set native macbook keyboard working like HHKB in the help of hammperspoon. By below lua code or function, I achieved that.

```lua
-- This function swaps the behavior of the Esc key and the backtick (`) key.
-- That means:
-- - Pressing Esc will type the ` character (or ~ if you hold Shift)
-- - Pressing the ` key will act like the Esc key
-- The code also prevents getting stuck in an infinite loop.

function swapEscAndBacktick()

  -- Create a new keyboard event listener (eventtap).
  -- It listens for keyDown (when you press a key) and keyUp (when you release a key).
  local local_function = hs.eventtap.new(
    {
      hs.eventtap.event.types.keyDown,  -- Detect key presses
      hs.eventtap.event.types.keyUp     -- Detect key releases
    },

    -- This is the function that runs every time a key event happens.
    function(event)
      -- Get the key code of the key that was pressed or released.
      -- Key codes are numbers that represent specific keys on the keyboard.
      local keyCode = event:getKeyCode()

      -- Check if this is a keyDown event (true when the key is pressed down).
      -- We'll need this to simulate both keyDown and keyUp correctly.
      local isDown = event:getType() == hs.eventtap.event.types.keyDown

      -- Get any modifier keys that are currently held (like Shift, Ctrl, etc.).
      local flags = event:getFlags()

      -- Prevent an infinite loop:
      -- When we simulate a key press (post a fake key event), we tag it with a custom property (1337).
      -- Here, we check if the current event was one of those simulated ones — if so, ignore it.
      if event:getProperty(hs.eventtap.event.properties.eventSourceUserData) == 1337 then
        return false
      end

      -- 53 = keyCode for the Escape key
      -- 50 = keyCode for the backtick/tilde key ( ` / ~ )

      if keyCode == 53 then
        -- If the user pressed the Esc key, we simulate a press of the backtick key instead.

        -- Create a new fake key event for backtick (key code 50)
        local newEvent = hs.eventtap.event.newKeyEvent({}, 50, isDown)

        -- If the user was holding Shift while pressing Esc,
        -- we add the Shift modifier so it will type a tilde (~) instead of backtick (`).
        if flags.shift then
          newEvent:setFlags({shift = true})
        end

        -- Tag this event as synthetic (fake), so it won't be processed again.
        newEvent:setProperty(hs.eventtap.event.properties.eventSourceUserData, 1337)

        -- Send (post) the new key event.
        newEvent:post()

        -- Stop the original Esc key event from continuing to the system.
        return true

      elseif keyCode == 50 then
        -- If the user pressed the backtick key, we simulate a press of the Esc key.

        -- Create a new fake key event for Escape (key code 53)
        local newEvent = hs.eventtap.event.newKeyEvent({}, 53, isDown)

        -- Tag it so we don't process it again and fall into a loop
        newEvent:setProperty(hs.eventtap.event.properties.eventSourceUserData, 1337)

        -- Send the fake Escape key event
        newEvent:post()

        -- (Optional) You had `escape_key_en_binding()` here, but that function isn't defined.
        -- You can delete this next line or define that function if you need it.
        -- escape_key_en_binding()

        -- Stop the original backtick key event from continuing to the system.
        return true
      end

      -- If it wasn’t Esc or `, don’t block it — just let it continue normally.
      return false
    end
  )

  -- Start listening for key events
  local_function:start()
end
```
