const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}

const url = '/collections/seamless-underwear/products.json?limit=200';

let skus = []
const pdpName = []

describe(`Grab all the pdp SKU and Array of pdps`, () => {
    it(`Grabs data from ${url}`, () =>{
        cy.request({
            method: 'GET',
            url: url,
            followRedirect: false,
            headers: {
                'accept': 'application/json'
            }
        })
        .then((response) => {
            // Parse JSON the body.
            let newData = response.body.products;
            // tags.includes('#Sale')
            // prodsku = 6975557566508 , id = 6975557566508
            // data-prodtitle = Reptile Stripe Mesh Bralette
            for(let pdp of newData){
                if(pdp.tags.includes('#Sale')){
                    skus.push(pdp.id)
                    pdpName.push('/products/' + pdp.handle)
                }
            }
        });
    })    
});

describe('Data is in console log', () => {
    it('copy and past data if prefer', () => {

            console.log('-------------------------------------')
            console.log(JSON.stringify(skus))
            console.log(JSON.stringify(pdpName) )
            console.log('-------------------------------------')
    })
})

const pdps = ["/products/nude-bralette","/products/nude-bikini-panties","/products/black-bralette","/products/black-brief-panties","/products/spotted-panther-bralette","/products/spotted-panther-brief","/products/blue-opal-bralette","/products/blue-iris-bralette","/products/blue-iris-brief","/products/sunkissed-brief","/products/lime-punch-high-cut-high-waisted","/products/lime-punch-highwaisted","/products/spotted-panther-highwaisted","/products/fjord-blue-thong","/products/fjord-blue-highwaisted","/products/laurel-green-cotton-bralette","/products/keepsake-lilac-bralette","/products/keepsake-lilac-high-waisted-panties","/products/keepsake-lilac-bikini-panties","/products/laurel-green-cotton-brief","/products/laurel-green-cotton-bikini","/products/blue-opal-cotton-bralette","/products/blue-opal-cotton-brief","/products/blue-opal-cotton-bikini","/products/black-cotton-bralette-1","/products/black-cotton-brief-panties","/products/black-cotton-bikini-panties","/products/nude-brief-panties","/products/nude-high-waisted-panties","/products/lime-punch-eco-silk-scarf","/products/black-thong","/products/opal-blue-thong-panties","/products/laurel-green-bralette","/products/provincial-blue-bralette","/products/blue-iris-cheeky","/products/blue-iris-highwaisted","/products/lime-punch-bikini","/products/fallen-rock-cotton-brief-panties","/products/black-cheeky-panties","/products/laurel-green-high-waisted-panties","/products/fallen-rock-cotton-bralette","/products/black-high-waisted-panties","/products/high-waisted-opal-blue-panties","/products/fallen-rock-cotton-bikini-panties","/products/fallen-rock-cotton-thong-panties","/products/black-bikini-panties","/products/grey-bikini-panties","/products/sleek-tiger-bikini","/products/black-high-waisted-thong","/products/cheeky-laurel-green-underwear","/products/blue-opal-bikini-panties","/products/blue-opal-high-waisted-thong","/products/dark-palm-brief","/products/sleek-tiger-brief","/products/sleek-tiger-highwaisted","/products/sleek-tiger-thong","/products/sunkissed-thong","/products/laurel-green-brief-panties","/products/brief-provincial-blue-panties","/products/provincial-blue-thong-panties","/products/nude-thong","/products/highwaisted-nude-thong","/products/nude-cheeky"]

// for( let i = 0; i < pdps.length; i++){
for( let i = 0; i < 3; i++){

    describe(`${i}. Start of test for href ${pdps[i]} and check size is added to cart`, () => {

        const size = 'div.swatch-element.lg';
        it(`Visits page ${pdps[i]}`,{ scrollBehavior: false }, () => {
            cy.visit(pdps[i])
            // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
            // console.log(JSON.stringify(pdps))
        });
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log('---------------------------------');
            console.log(err);
            console.log(runnable);
            console.log('---------------------------------');
            return false
        })

        it(`Click on swatch ${size}`,{ scrollBehavior: false }, () => {
            cy.scrollTo(0, 850);
            cy.wait(1000);
            cy.get(`.proVariants ${size}`).click();
        })

        it(`ADD TO CART`,{ scrollBehavior: false }, () => {
            cy.scrollTo(0, 900);
            cy.scrollTo(0, 1050);
            cy.get(`.proButton.mb20 #AddToCart`).click({ force: true });
        })

        it(`Opens Icon Cart`,{ scrollBehavior: false }, () => {
            cy.scrollTo(0, 600);
            cy.wait(1000);
            cy.scrollTo(0, 500);
            cy.get(`#eby-cartIcon66229`).click( { force: true });
        })

        const chosen = 'lg'
        it(`Matches swatch action ${size}`,{ scrollBehavior: false }, () => {
            cy.get(`.drawerProductTitle > span`).then(el => {
                cy.get(el).should('contain', chosen);
            });
        })
    })
}






const getJsonData = () => {
    cy.request({
        method: 'GET',
        url: url,
        followRedirect: false,
        headers: {
            'accept': 'application/json'
        }
    })
    .then((response) => {
        // Parse JSON the body.
        return response.body.products
        let body = JSON.parse(response.body);
        // expect(response.status).to.eq(200);
        // cy.log(body);
        // expect(response.body).to.not.be.null;
        // Ensure certain properties are present.
        // body.data.forEach(function (item) {
        //     expect(item).to.have.all.keys('type', 'id', 'attributes', 'relationships', 'links');
        //     ['changed', 'created', 'default_langcode', 'langcode', 'moderation_state', 'nid', 'path', 'promote', 'revision_log', 'revision_timestamp', 'status', 'sticky', 'title', 'uuid', 'vid'].forEach((key) => {
        //         expect(item['attributes']).to.have.property(key);
        //     });
        // });
    });
}



// const URL = '/collections/seamless-underwear'
// describe('Exit iframe', () => {
//     it('exit from iframe if any',() => {
//         cy.visit(URL);
//         // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
//         
//     });
// });
// 
// 
// let pdps = []
// 
// describe('1st GRAB ALL PAGES HREF! ', () => {
//     it(`pdp opens size`, () => {
// 
//         cy.get('#filtered-prod-listing > .item.ebyProdTile.epcWrapper.tileFilterable a.proFeaturedImage').each( (el, i) => {
//             const pdp = Cypress.$(el).attr('href')
//             pdps.push(pdp)
//             console.log(JSON.stringify(pdps))
//         });
// 
//     });
// });