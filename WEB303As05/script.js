$(document).ready(function () {

    class ContentItem {
        constructor(uniqueId, name, description, category) {
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(uniqueId, name, description, category) {
            if (this.uniqueId === uniqueId && name && description && category) {
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
            }
        }

        toString() {
            return `
                <div class="content-item-wrapper">
                    <div id="content-item-${this.uniqueId}">
                        <h2 class="name">${this.name}</h2>
                        <p class="description">${this.description}</p>
                        <div class="category">${this.category}</div>
                    </div>
                </div>
            `;
        }
    }

    const content = [
        { "uniqueId": 0, "name": "Shirts", "description": "Sleveless shirt with latest design", "category": "HNM" },
        { "uniqueId": 1, "name": "Tshirts", "description": "Fullsleve tshirt with superman logo", "category": "Gucci" },
        { "uniqueId": 2, "name": "Jeans", "description": "All day comfort with authentic style", "category": "Levis" },
        { "uniqueId": 3, "name": "Pent", "description": "Cotton pant with bekt hooks", "category": "Private" }
    ];

    content.forEach(item => {
        $('#content-item-list').append(new ContentItem(item.uniqueId, item.name, item.description, item.category).toString());
    });

    const wrapperStyles = {
        'margin': 'auto',
        'margin-left': '50px',
        'margin-top': '30px',
        'border': 'dashed 3px black',
        'width': '30%',
        'padding': '20px',
        'margin-bottom': '20px'
    };

    $('.content-item-wrapper').css(wrapperStyles);

});
