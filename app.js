$(document).ready(function () {



    $("#me").click(function (e) {
        e.preventDefault()
        function myel(myclass = "") {
            if (!$("#inputme").val().trim() == '') {
                let vall = $("#inputme").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line" > </div>')
                    , bigDiv = $(`<div ${myclass} > </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
            else {
                return
            }

        }
        $("#messageyou").append(myel())
        $("#messageme").append(myel('class="end"'))
        $("#inputme").val("")
        document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight)
        document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight)
    })















    $("#you").click(function (e) {
        e.preventDefault()
        if (!$("#inputyou").val().trim() == '') {
            myel = (myclass = "") => {
                let vall = $("#inputyou").val()
                    , newH3 = $('<h3> </h3>')
                    , newDiv = $('<div class="line" > </div>')
                    , bigDiv = $(`<div ${myclass} > </div>`)
                $(newH3).append(vall)
                $(newDiv).append(newH3)
                $(bigDiv).append(newDiv)
                return bigDiv
            }
        }
        else {
            return
        }

        $("#messageyou").append(myel('class="end"'))
        $("#messageme").append(myel())
        $("#inputyou").val("")
        document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight)
        document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight)
    })










})
