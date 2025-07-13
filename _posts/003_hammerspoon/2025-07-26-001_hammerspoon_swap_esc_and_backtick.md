---
title: Hammerspoon - Swap Esc and Backtick Keys Like HHKB
category: hammerspoon
tags: [hammerspoon, lua, HHKB, keyboard, productivity]
---

## Introduction

As a long-time Vim user and fan of the Happy Hacking Keyboard (HHKB), I've grown accustomed to the unique key layout of the HHKB. On this keyboard, the **Esc** key is conveniently placed just to the left of the number 1 key, which is different from most standard keyboards where the **Esc** key is in the upper-left corner and the backtick (\`) key is to the left of the number 1.

This layout is incredibly useful for Vim enthusiasts, as it makes reaching the **Esc** key much easier. However, when I use a regular MacBook keyboard (without my HHKB), I often find myself accidentally pressing the backtick key when I intend to hit **Esc**—a result of muscle memory from using the HHKB layout.

To solve this, I wanted to remap the keys on my MacBook keyboard to mimic the HHKB layout, specifically swapping the **Esc** and backtick keys. I achieved this using [Hammerspoon](https://www.hammerspoon.org/), a powerful automation tool for macOS.

## The Solution: Swapping Esc and Backtick with Hammerspoon

Below is the Lua code I use in my Hammerspoon configuration to swap the **Esc** and backtick keys. This script ensures that:
- Pressing **Esc** will type the backtick (\`) character (or tilde ~ if Shift is held)
- Pressing the backtick key will act as **Esc**
- The code avoids infinite loops by tagging synthetic events

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

## How to Use This Script

1. **Install Hammerspoon** if you haven't already: [Download here](https://www.hammerspoon.org/).
2. **Add the script** to your `~/.hammerspoon/init.lua` file.
3. **Call the function** by adding `swapEscAndBacktick()` at the end of your config or in your Hammerspoon console.
4. **Reload Hammerspoon** (click the Hammerspoon menu icon and choose "Reload Config").

Now, your MacBook keyboard will behave like an HHKB for the Esc and backtick keys!

## Why This Works

- **Eventtap** allows you to intercept and modify keyboard events at a low level.
- By tagging synthetic events, the script avoids processing its own simulated keypresses, preventing infinite loops.
- This approach is flexible and can be extended to remap other keys as needed.

## Final Thoughts

This small tweak has made my workflow much smoother when switching between my HHKB and MacBook keyboards. If you have similar muscle memory issues or want to customize your keyboard further, Hammerspoon is a fantastic tool to explore.

If you have questions or want to see more Hammerspoon tips, let me know in the comments!
