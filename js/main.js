$(document).ready(function () {

    $(".trans-bx .trans-tp").click(function () {
        $(this).parent().toggleClass("transbx-active");
        $(this).parent().find(".trans-drop").slideToggle();
    });

    $(".notifi").click(function () {
        $(this).find(".notifi-drop").slideToggle();
    })

    $(".crdbx .crdbx-tlt").click(function () {

        if ($(this).parent().hasClass("crdbxactive")) {
            $(this).parent().removeClass("crdbxactive");
            $(".crdbx").show();
            $(this).parent().find(".dropbxs").hide();
        } else {
            $(this).parent().addClass("crdbxactive");
            $(".crdbx").hide();
            $(this).parent().show();
            $(this).parent().find(".dropbxs").show();
        }

    });

    $('[data-toggle="popover"]').popover({

        template: `<div class="popover" role="tooltip">
                        <div class="arrow"></div>
                        <div class="popover-content">

                            <div class="alet-tip">
                                <div class="tip-sec">
                                    <p>ATM Withdrawal failed due to insufficent balance</p>
                                    <p>Cash Withdrawal</p>
                                </div>
                                <div class="tip-sec-sttus">
                                    <p>Time : <span>12:30pm, 31/12/2020</span></p>
                                    <p>Status : <span class="failstatus">Withdrawal Failed</span></p>
                                </div>
                                <a class="support-tip">Need additional support?</a>
                            </div>

                        </div>
                    </div>`,
    });


    // $('.alet[data-toggle="tooltip"]').tooltip({
    //     template: `<div class="alet-tip">
    //                 <div class="tip-sec">
    //                     <p>ATM Withdrawal failed due to insufficent balance</p>
    //                     <p>Cash Withdrawal</p>
    //                 </div>
    //                 <div class="tip-sec-sttus">
    //                     <p>Time <span>12:30pm, 31/12/2020</span></p>
    //                     <p>Status <span class="failstatus">Withdrawal Failed</span></p>
    //                 </div>
    //                 <a class="support-tip">Need additional support?</a>
    //             </div>`,

    // })


    $(".pop").popover({ trigger: "manual", html: true, animation: false })
        .on("mouseenter", function () {
            var _this = this;
            $(this).popover("show");
            $(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
            });
        }).on("mouseleave", function () {
            var _this = this;
            setTimeout(function () {
                if (!$(".popover:hover").length) {
                    $(_this).popover("hide");
                }
            }, 300);
        });

    $('[data-toggle="tooltip"]').tooltip();



    // forget pin poup

    $(".cls, .popsucess .btn-next").click(function () {
        $(".popup").hide();
    })

    $(".fget").click(function () {
        $(".forgototp").show();
        $(".fgoetmobile").show();
    });

    $(".fgoetmobile .btn-next").click(function () {
        $(".fgoetmobile").hide();
        $(".fgoetotpconf").show();
    });

    $(".fgoetotpconf .btn-next").click(function () {
        $(".fgoetotpconf").hide();
        $(".fgoetmobile").hide();
        $(".fgoetreset").show();
    });

    $(".fgoetreset .btn-next").click(function () {
        $(".forgototp").hide();
    });

    // show cvv
    $(".cvvs").click(function () {


        if ($(this).hasClass("hidecvvs")) {
            $(this).removeClass("hidecvvs");
            $(this).text("Show CVV & Date");
            $(".showedcvv").css("display", "none");
        } else {
            $(this).addClass("hidecvvs");
            $(".showedcvv").css("display", "flex");
            $(this).text("Hide CVV & Date");
        }
    });

    // range slider

    $(window).on("load", function () {
        var range = $("#range").attr("value");
        $("#rangeresult").html(range);
        $(".slide").css("width", "50%");
        $(document).on('input change', '#range', function () {
            $('#rangeresult').html($(this).val());
            var slideWidth = $(this).val() * 100 / 100;

            $(".slide").css("width", slideWidth + "%");
        });
    });

    // edit limt

    $(".elimt").click(function () {
        $(this).parent().find(".entlimit").show();
    })

    // edit prefrance
    $(".editsummeryshow").click(function () {
        $(".editprefrence").css("display", "flex");
    })
    $(".editpref .btn-submit").click(function () {
        $(".editpref").hide();
        $(".editsummery").show();
    });
    $(".editsummery .btn-submit").click(function () {
        $(".editprefrence").hide();
    });

    // change password

    $(".changepassword").click(function () {
        $(".chngpassword").css("display", "flex");
        $(".chngpasssec").show();
    });

    $(".chngpasssec .btn-next").click(function () {
        $(".chngpasssec").hide();
        $(".popsucess").show();
    });

    // logout

    $(".lout").click(function () {
        window.location.href = "login.html";
    })

});