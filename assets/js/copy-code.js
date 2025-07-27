document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    var pre = codeBlock.parentNode;
    pre.style.cursor = 'pointer';
    pre.addEventListener('click', function () {
      var text = codeBlock.innerText;
      navigator.clipboard.writeText(text).then(function () {
        // Visual feedback: background color flash
        var originalBg = pre.style.backgroundColor;
        pre.style.backgroundColor = '#d4f7c5'; // light green
        setTimeout(function () {
          pre.style.backgroundColor = originalBg;
        }, 400);

        // Tooltip feedback
        var tooltip = document.createElement('div');
        tooltip.innerText = 'Copied!';
        tooltip.style.position = 'absolute';
        tooltip.style.top = '8px';
        tooltip.style.right = '16px';
        tooltip.style.background = '#222';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '2px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '0.95em';
        tooltip.style.opacity = '0.95';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.zIndex = '10';
        tooltip.className = 'copy-tooltip';
        pre.style.position = 'relative';
        pre.appendChild(tooltip);
        setTimeout(function () {
          tooltip.style.transition = 'opacity 0.4s';
          tooltip.style.opacity = '0';
        }, 800);
        setTimeout(function () {
          if (tooltip.parentNode) tooltip.parentNode.removeChild(tooltip);
        }, 1200);
      });
    });
  });
}); 