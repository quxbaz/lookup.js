/*
 * lookup.js
 * Author: David Yeung
 *
 * DESCRIPTION:
 *
 * jQuery plugin that performs a google/wiki/dictionary search
 * on a double-clicked word and opens the results in a new tab.
 * 
 * EXAMPLES:
 * 
 * 1. $('body').enable_lookup();
 *
 * Enables the plugin for the entire body of the page. Any text that
 * is double-clicked will open up a new tab with a
 * google/wiki/dictionary search that text.
 *
 * 2. $('p').enable_lookup('wiki');
 *
 * Enables wikipedia lookup for all <p> elements.
 *
 * 3. $('.article_content').enable_lookup('dict');
 *
 * Enables dictionary lookup for elements with a class of
 * "article_content".
 * 
 * TODO: Allow multi-word searches.
 */

$(document).ready(

  function() {

    // Gets the currently selected text on the page.
    function get_selection() {
      var txt = '';
      if (window.getSelection) {
        txt = window.getSelection();
      }
      // Using deprecated function for older browser version compatibility.
      else if (document.getSelection) {
        txt = document.getSelection();
      }
      else if (document.selection) {
        txt = document.selection.createRange().text;
      }
      return txt;
    }

    (function($) {
       // Performs a google/wiki/dictionary search on a double-clicked
       // word.
       // 
       // @search-type
       // A string specifying what sort of search to perform. Can be
       // 'google, 'wiki', 'dict'. Default value is 'google'.
       $.fn.enable_lookup = function(search_type) {
         this.dblclick(
           function() {
             var url = '';
             var selected_text = get_selection();
             if (search_type == 'wiki') {
               url = 'http://www.wikipedia.org/wiki/' + selected_text;
             } else if (search_type == 'dict') {
               url = 'http://www.thefreedictionary.com/' + selected_text;
             }
             else {
               url = 'http://www.google.com/search?btnG=1&pws=0&q=' + selected_text;
             }
             window.open(url);
           });
         return this;
       };
       
     })(jQuery);

});
