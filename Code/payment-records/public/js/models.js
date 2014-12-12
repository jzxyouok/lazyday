// Declare variables used
var Payment;

// Model for messages
Payment = Backbone.Model.extend({

    // Default values
    defaults: {
        price: '',
        types: '',
        created: ''
    },

    // Prevent submit
    sync: function () { return false; }
});
