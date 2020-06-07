tinymce.PluginManager.add("pagenumber", function (editor) {
  editor.on("init", function(e) {
    tinymce.activeEditor.dom.addStyle(
      " var.page { font-style: normal; } "
    );
  });

    editor.ui.registry.addMenuItem("pagenumber", {
      text: "Page number",
      icon: "duplicate",
      onAction: function() {
        var nodecount = tinymce.activeEditor.dom.select("var.page").length+1;
        tinymce.activeEditor.selection.setNode(tinymce.activeEditor.dom.create(
          "var", {class: "page"}, tinymce.util.I18n.translate("Page")+" "+nodecount
        ));
        tinymce.activeEditor.selection.setContent("</var> ");
      }
    });

    editor.ui.registry.addButton("pagenumber", {
      tooltip: "Page number",
      icon: "duplicate",
      onAction: function() {
        var nodecount = tinymce.activeEditor.dom.select("var.page").length+1;
        tinymce.activeEditor.selection.setNode(tinymce.activeEditor.dom.create(
          "var", {class: "page"}, tinymce.util.I18n.translate("Page")+" "+nodecount
        ));
        tinymce.activeEditor.selection.setContent("</var> ");
      }
    });

});
