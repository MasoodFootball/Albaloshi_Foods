$(document).ready(function () {
    $.validator.addMethod("alphanumeric", function (a, b) { return this.optional(b) || /^\w+$/i.test(a) }, "Letters, numbers, and underscores only please.");

    $.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please.");

    $.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please.");

    $.validator.addMethod('EmailDomain', function (value, element, args) {
        return (value.indexOf("gmail.com") != -1);
    }, 'Email are only from gmail.com ');

    $('#cont-form').validate({
        rules: {
            Name: {
                required: true,
                alphanumeric: true,
                lettersonly:true,
                minWords: true
            },
            Email: {
                required: true,
                EmailDomain: true,
                email: true
            },
            Subject: {
                required: true,
                alphanumeric: true,
                lettersonly:true,
                minWords: true
            },
            Message: {
                required: true,
                alphanumeric: true,
                lettersonly:true,
                minWords: true
            },
         
         
         
         
        }

    });
    $('#submit').on('click', function () {
        console.log($('#cont-form').valid());
    });
})

$(document).ready(function () {
    $.validator.addMethod("alphanumeric", function (a, b) { return this.optional(b) || /^\w+$/i.test(a) }, "Letters, numbers, and underscores only please.");

    $.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please.");

    $.validator.addMethod('EmailDomain', function (value, element, args) {
        return (value.indexOf("gmail.com") != -1);
    }, 'Email are only from gmail.com ');

    $('#res-form').validate({
        rules: {
            Name: {
                required: true,

                lettersonly:true
       
            },
            Email: {
                required: true,
                EmailDomain: true,
                email: true
            },
            Phone: {
                required: true,
              
            },
           Date: {
                required: true,
              
            },
            Time: {
                required: true,
              
            },
         
         
         
         
        }

    });
    $('#sub').on('click', function () {
        console.log($('#res-form').valid());
    });
})


$(document).ready(function () {

    $.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please.");

    $.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please.");

    $.validator.addMethod('EmailDomain', function (value, element, args) {
        return (value.indexOf("gmail.com") != -1);
    }, 'Email are only from gmail.com ');

    $('#form').validate({
        rules: {
            Name: {
                required: true,

                lettersonly:true
       
            },
            Email: {
                required: true,
                EmailDomain: true,
                email: true
            },
            Phone: {
                required: true,
              
            },
           Date: {
                required: true,
              
            },
            Time: {
                required: true,
              
            },
         
         
         
         
        }

    });
    $('#click').on('click', function () {
        console.log($('#form').valid());
    });
})

$(document).ready(function () {

    $.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please.");

    $.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please.");

    $.validator.addMethod('EmailDomain', function (value, element, args) {
        return (value.indexOf("gmail.com") != -1);
    }, 'Email are only from gmail.com ');

    $('#for').validate({
        rules: {
            Name: {
                required: true,

                lettersonly:true
       
            },
            Email: {
                required: true,
                EmailDomain: true,
                email: true
            },
            Phone: {
                required: true,
              
            },
           Date: {
                required: true,
              
            },
            Time: {
                required: true,
              
            },
         
         
         
         
        }

    });
    $('#cli').on('click', function () {
        console.log($('#for').valid());
    });
})

$(document).ready(function () {

    $.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please.");

    $.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please.");

    $.validator.addMethod('EmailDomain', function (value, element, args) {
        return (value.indexOf("gmail.com") != -1);
    }, 'Email are only from gmail.com ');

    $('#fo').validate({
        rules: {
            name: {
                required: true,

                lettersonly:true
       
            },
            email: {
                required: true,
                EmailDomain: true,
                email: true
            },
            website: {
                required: true,
              
            },
           message: {
                required: true,
              
            },
         
         
        }

    });
    $('#b').on('click', function () {
        console.log($('#fo').valid());
    });
})