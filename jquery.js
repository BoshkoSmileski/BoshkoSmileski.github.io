let productLikes = {};

function likeProduct(productName) {
    productLikes[productName] = (productLikes[productName] || 0) + 1;
    updateLikeCounter(productName);
}

function updateLikeCounter(productName) {
    const likeCounter = $(`#likeCounter-${productName}`);

    if (likeCounter.length) {
        likeCounter.text(`Likes: ${productLikes[productName]}`);
    }
}

function addComment(productName) {
    const commentInput = $(`#comment-${productName}`);
    const commentText = commentInput.val().trim();

    if (commentText !== '') {
        const commentsDiv = $(`#comments-${productName}`);
        commentsDiv.append(`<p>${commentText}</p>`);
        commentInput.val('');
    }
}

$(document).ready(function(){
    $("#sodrzhina").submit(function(event) {
        var isValid = true;


        $("#sodrzhina input").each(function() {
            if ($(this).val() === '') {
                isValid = false;
                return false;
            }
        });

        if (!isValid) {
            alert("Please fill out all fields");
            event.preventDefault();
        }
    });
});

$(document).ready(function(){
    $("#loginForm").submit(function(event){
        var username = $("#username").val();
        var password = $("#password").val();
        
        if(username === "" || password === "") {
            alert("Please fill in all fields");
            event.preventDefault();
        }
    });
});

$(document).ready(function(){
    $(".product").hide().fadeIn(1000);
});

$(document).ready(function(){
    $("#sodrzhina").hide().fadeIn(1000);
});

$(document).ready(function(){
    $(".contactinfo").hide().fadeIn(1000);
});

$(document).ready(function(){
    $(".product-container").hide().fadeIn(1000);
});

$(document).ready(function(){
    $(".container").hide().fadeIn(1000);
});