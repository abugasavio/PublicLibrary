p1.view.createBook = {
    setupUserInterface: function () {
        var saveButton = document.forms['Book'].commit;
        Book.loadAll();

        saveButton.addEventListener("click", p1.view.createBook.handleSaveButtonClickEvent);

        window.addEventListener("beforeunload", function(){
            Book.saveAll();
        })

    },

    handleSaveButtonClickEvent: function() {
        var formEl = document.forms['Book'];
        var slots = {isbn: formEl.isbn.value,
                     title: formEl.title.value,
                     year: formEl.year.value};
        console.log("adfsad");
        Book.add(slots);
        formEl.reset();
    }
};

