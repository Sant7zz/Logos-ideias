/*
      TROCA DE PÁGINAS
    */

    function showPage(pageId) {

      const pages = document.querySelectorAll(".page");

      pages.forEach(function(page) {
        page.classList.remove("active");
      });

      const selectedPage = document.getElementById(pageId);

      if (selectedPage) {
        selectedPage.classList.add("active");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }


    /*
      LOGIN
    */

    function login(event) {

      event.preventDefault();

      alert("Login realizado com sucesso!");

      showPage("dashboard");
    }


    /*
      ENVIO DA SOLICITAÇÃO
    */

    function submitRequest(event) {

      event.preventDefault();

      alert(
        "Solicitação criada com sucesso! Agora escolha um prestador."
      );

      showPage("providers");
    }


    /*
      ESCOLHER PRESTADOR
    */

    function selectProvider(name) {

      const confirmChoice = confirm(
        "Deseja contratar " + name + "?"
      );

      if (confirmChoice) {

        alert(
          "Prestador " +
          name +
          " selecionado com sucesso!"
        );

        showPage("dashboard");

      }

    }


    /*
      FILTROS
    */

    const filters = document.querySelectorAll(".filter");

    filters.forEach(function(filter) {

      filter.addEventListener("click", function() {

        filters.forEach(function(item) {
          item.classList.remove("active");
        });

        this.classList.add("active");

      });

    });
