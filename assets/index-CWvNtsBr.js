(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();

jQuery(function(t){
  var r = t(".scroll-stopping-list");
  r.owlCarousel({
    mouseDrag: false,
    touchDrag: false,
    center: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    nav: true,
    margin: 20,
    lazyLoad: true,
    stagePadding: 100,
    responsive: {
      0: { items:1 },
      600: { items:2 },
      1000: { items:3 }
    }
  });
});

jQuery(function(t){
  var r = t(".bandwidth-list");
  r.owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    center: true,
    margin: 0,
    nav: true,
    dots: true,
    items: 4,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 4 }
    }
  });

  function i() {
    var a = t(".owl-item.active.center"),
        e = a.find("video"),
        o = a.find(".bandwidth-video__placeholder");
    if (e.length !== 0) {
      o.fadeOut();
      e.get(0).play();
    }
  }

  r.on("translate.owl.carousel", function() {
    t(".owl-item .bandwidth-item video").each(function(){
      t(this).get(0).pause();
    });
    t(".bandwidth-video__placeholder").fadeIn();
  });

  r.on("translated.owl.carousel", function() {
    i();
  });

  t(".bandwidth-video__placeholder").on("click", function() {
    var a = t(this).closest(".bandwidth-video"),
        e = a.find("video").get(0);
    if (t(this).closest(".owl-item").hasClass("active")) {
      t(this).fadeOut();
      e.play();
    }
  });
});

(function(){
  var t = document.querySelector(".nav__toggler"),
      r = t.querySelector(".nav__toggler-label");
  r.addEventListener("click", function(i){
    var a = document.querySelector(".main-menu");
    a.classList.toggle("main-menu__open");
    t.setAttribute("aria-expanded", String(a.classList.contains("main-menu__open")));
    r.classList.toggle("active");
    r.classList.toggle("not-active");
  }, true);
})();

$(function(){
    $("#contact_form_1").on("submit", function(t){
        t.preventDefault(); // Prevent default form submission
        var email = $("#contact_form_1 #form_email").val();
        var data = {
            "to": "subscription@makemereels.com",
            "from": "subscription@makemereeel.com",
            "reply_to": "subscription@makemereels.com",
            "subject": "Subscription",
            "plain_body": email
        };
        $.ajax({
            type: "POST",
            url: "https://makemereels-u33689.vm.elestio.app/api/v1/send/message",
            headers: {
                "X-Server-API-Key": "0BHL7PwwNpKafaesVBsHYVdb",
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            success: function(){
                $('#myModal').modal('hide');
                // Reset the form
                $("#contact_form_1")[0].reset();
            },
            error: function(xhr) {
                var errorMessage = "There was an error submitting the form. Please try again.";
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    errorMessage += " Error: " + xhr.responseJSON.message;
                }
                alert(errorMessage);
            }
        });
        return false;
    });

    $("#contact_form_2").on("submit", function(t){
        t.preventDefault(); // Prevent default form submission
        var email = $("#contact_form_2 #form_email").val();
        var data = {
            "to": "subscription@makemereels.com",
            "from": "subscription@makemereeel.com",
            "reply_to": "subscription@makemereels.com",
            "subject": "Subscription",
            "plain_body": email
        };
        $.ajax({
            type: "POST",
            url: "https://makemereels-u33689.vm.elestio.app/api/v1/send/message",
            headers: {
                "X-Server-API-Key": "0BHL7PwwNpKafaesVBsHYVdb",
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            success: function(){
                // Reset the form
                $("#contact_form_2")[0].reset();
                // Show success message
                var successMessage = '<div class="alert alert-success">Form submitted successfully!</div>';
                $("#contact_form_2").find(".messages").html(successMessage);
            },
            error: function(xhr) {
                var errorMessage = "There was an error submitting the form. Please try again.";
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    errorMessage += " Error: " + xhr.responseJSON.message;
                }
                alert(errorMessage);
            }
        });
        return false;
    });
});