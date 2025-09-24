var cursor = {
    delay: 3,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $outline: document.querySelector('.cursor-dot'),
    init: function() {
        // Set up element sizes
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    setupEventListeners: function() {
        var self = this;
        // Anchor hovering
        var hoveitems = document.querySelectorAll('a,.js-chover');
          hoveritems = Array.prototype.slice.call(hoveitems);
          hoveritems.forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize(el);
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        var hoveitemscolor = document.querySelectorAll('.js-chovercolor');
          hoveitemscolor = Array.prototype.slice.call(hoveitemscolor);
          hoveitemscolor.forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.$outline.style.background = 'rgba(0,0,0,0.5)';
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.$outline.style.background = 'rgba(255,255,255,0.5)';
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.clientX;
            self.endY = e.clientY;
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = false;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = false;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 0;
            
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        
          self.$outline.style.left = self._x + 'px';
        
        
          self.$outline.style.top = self._y + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function(el) {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$outline.style.transform = 'translate(-50%, -50%)';
            self.$outline.style.width = '32px';
            self.$outline.style.height = '32px';
        } else {
            self.$outline.style.transform = 'translate(-50%, -50%)';
            self.$outline.style.width = '8px';
            self.$outline.style.height = '8px';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$outline.style.opacity = 1;
        } else {
            self.$outline.style.opacity = 0;
        }
    }
}
cursor.init();

$('iframe,.nocursordot').hover(function(){
    $('.cursor-dot').hide();
},function(){
    $('.cursor-dot').show();
});

