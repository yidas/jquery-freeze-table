/**
 * RWD Table with freezing head rows and columns
 * 
 * @author  Nick Tsai <myintaer@gmail.com>
 * @version 0.1.0
 * @see     https://github.com/yidas/js-freeze-table
 */

(function ($, window) {

  var FreezeTable = function(element, options) {

    /**
     * Setting
     */
    // Target table wrap
    var $tableWrapper = $(element);
    // Options
    options = options || {};
    var freezeHead = options.freezeHead || true;
    var freezeColumn = options.freezeColumn || true;
    var fixedNavbar = options.fixedNavbar || '.navbar-fixed-top';
    var namespace = options.namespace || 'freeze-table';

    // Catch table dom
    var $table = $tableWrapper.children("table");

    // Get navbar height for keeping fixed navbar
    var fixedNavbarHeight = (fixedNavbar) ? $(fixedNavbar).outerHeight() : 0;

    /**
     * Initialization
     */
    var init = function() {

      if (freezeHead) {
        buildHeadTable();
      }
      if (freezeColumn) {
        buildColumnTable();
      }

      // Initialization
      $(window).trigger('scroll.'+namespace);
      $tableWrapper.trigger('scroll.'+namespace);
    }

    /**
     * Freeze thead table
     */
    var buildHeadTable = function() {
      
      // Clone the table as Fixed thead
      var $headTable = $table.clone();
      // Wrap the Fixed Column table
      var $headTableWrap = $('<div class="clone-head-table-wrap"></div>')
        .append($headTable)
        .css('position', 'fixed')
        .css('overflow', 'hidden')
        .css('visibility', 'hidden')
        .css('top', 0)
        .css('z-index', 2)
        .css('height', $table.find("thead").outerHeight());
        // .css('background-color', 'rgba(255, 255, 255, 1)');
      // Add into target table wrap
      $tableWrapper.append($headTableWrap);

      /**
       * Listener - Table scroll for effecting Freeze Column
       */
      $tableWrapper.on('scroll.'+namespace, function() {

        $headTableWrap.css('left', $table.offset().left);
      });

      /**
       * Listener - Window scroll for effecting freeze head table
       */
      $(window).on('scroll.'+namespace, function() {

        // Current container's top position
        var topPosition = $(window).scrollTop() + fixedNavbarHeight;
        
        // Detect Current container's top is in the table scope
        if ($table.offset().top - 1 <= topPosition && ($table.offset().top + $table.outerHeight() - 1) >= topPosition) {

          $headTableWrap.css('visibility', 'visible');

        } else {

          $headTableWrap.css('visibility', 'hidden');
        }
      });
    }

    /**
     * Freeze column table
     */
    var buildColumnTable = function() {

      /**
       * Setting
       */
      var columnNum = options.columnNum || 1;
      var columnBorderWidth = options.columnBorderWidth || 2;
      var columnStyles = options.columnStyles || null;

      // Get width by fixed column with number setting
      var width = 0 + columnBorderWidth;
      for (var i = 1; i <= columnNum; i++) {
        // th/td detection
        var th = $table.find('th:nth-child('+i+')').outerWidth();
        var addWidth = (th > 0) ? th : $table.find('td:nth-child('+i+')').outerWidth();
        width += addWidth;
      }
      
      // Clone the table as Fixed Column table
      var $columnTable = $table.clone();
      // Wrap the Fixed Column table
      var $columnTableWrap = $('<div class="clone-column-table-wrap"></div>')
        .append($columnTable)
        .css('position', 'fixed')
        .css('overflow', 'hidden')
        .css('visibility', 'hidden')
        .css('z-index', 1)
        .css('width', width);
        // .css('background-color', 'rgba(255, 255, 255, 1)');
      // Styles option
      if (columnStyles && typeof styles === "object") {
        $.each(styles, function(key, value) {
          $columnTableWrap.css(key, value);
        });
      }
      // Add into target table wrap
      $tableWrapper.append($columnTableWrap);

      /**
       * Listener - Table scroll for effecting Freeze Column
       */
      $tableWrapper.on('scroll.'+namespace, function() {

        // Detect for horizontal scroll
        if ($(this).scrollLeft() > 0) {

          $columnTableWrap.css('visibility', 'visible');

        } else {

          $columnTableWrap.css('visibility', 'hidden');
        }
      });

      /**
       * Listener - Window resize for effecting tables
       */
      $(window).on('resize.'+namespace, function() {
        // Follows origin table's width
        $columnTable.width($table.width());
      });

      /**
       * Listener - Window scroll for effecting freeze column table
       */
      $(window).on('scroll.'+namespace, function() {

        $columnTableWrap.css('top', $table.offset().top - $(this).scrollTop() + fixedNavbarHeight);
      });
    }

    /**
     * Unbind event 
     */
    this.unbind = function() {
      $(window).off('scroll.'+namespace);
      $tableWrapper.off('scroll.'+namespace);
    }

    init();

    return this;
  }

  /**
   * Interface
   */
  // Class
  window.FreezeTable = FreezeTable;
  // jQuery interface
  $.fn.freezeTable = function (options) {
    return this.each(function () {
      new FreezeTable(this, options)
    });
  }

})(jQuery, window);
