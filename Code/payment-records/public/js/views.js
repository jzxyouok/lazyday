// Declare variables used
var PaymentView, PaymentListView;

// View for messages
PaymentView = Backbone.Marionette.ItemView.extend({
    template: '#payment-item',

    tagName: 'li',

    className: 'list-group-item'
});

// View for message list
PaymentListView = Backbone.Marionette.CollectionView.extend({
    itemView: PaymentView,

    intialize: function () {
        // Set up event listeners
        this.collection.on('sync', this.render);
        this.collection.on('create', this.render);
    },

    render: function () {

        // Cache selector
        this.container = $('ul#content');

        // Empty out any existing content
        this.container.empty();

        // Render messages
        this.collection.each(function (payment) {
            var view = new PaymentView({ model: payment});
            this.container.append(view.render().el);
        }, this);
    }
});
