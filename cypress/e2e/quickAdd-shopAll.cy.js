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
const URL = '/collections/seamless-underwear'
describe('Exit iframe', () => {
    it('exit from iframe if any',() => {
        cy.visit(URL);
        // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
        
    });
});


let pdps = ["5304595480620","5327776809004","5304592629804","5297140596780","6773504376876","6944000180268","6793219244076","6793220358188","6793262530604","6664648458284","6591621234732","6773511553068","6773513846828","6916254433324","6916252270636","6935429677100","6793224224812","6793227960364","6916251287596","6916255088684","6916251779116","6670188806188","6591645024300","6916255252524","6916254203948","6916252074028","6915712974892","6916254105644","6935428366380","6598944227372","6773499789356","6773500084268","6916251549740","6916255350828","6916252631084","5304863096876","6841303597100","6841305530412","6841295994924","6569006432300","5403032256556","6785782743084","6673058398252","6673054728236","5305242845228","6773510733868","6793230614572","5307181826092","5304608555052","6793199419436","6793212493868","6793215901740","6793216360492","6793217277996","5304595382316","5304605671468","6793270558764","6673032937516","6673036607532","6673029169196","5408840482860","6793276096556","6793267413036","6793221144620","6793218097196","6599108558892","6599105839148","6599107313708","6599097778220","6599095910444","6599094173740","6773865119788","6773865742380","6773864955948","6758604996652","6758609748012","6673083629612","5320532590636","5304608817196","6599017005100","6916253319212","5304568414252","6599021101100","6543109226540","6673038835756","6673040998444","6773501886508","6773503164460","5306929315884","6626878586924","6673051189292","5408806731820","5408843104300","6598934724652","5307437383724","5408808501292","5408803061804","5437828169772","6627392225324","5441467547692","6598933282860","5304606720044","6543108898860","6598929580076","6598936985644","5320343945260","5327905685548","5328034791468","5320544714796","5307109408812","5304600690732","5408843169836","5308108374060","5437827940396","6591644729388","6598918438956","5306945962028","5308101623852","5304863359020","5307166359596","5307239333932","5307230650412","5307244445740","5437827776556","6552036835372","5408810991660","6552037261356","5441467842604","5304598691884","5327841558572","5327529902124","5307242381356","6921319514156"]
const pdpName = ["Nude Bralette","Nude Bikini","Black Bralette","Black Brief","Exotic Botanical Bralette","Brick Dust Tank","Piki Bralette","Piki Brief","Piki High Cut","Black Mesh Bralette","Black Seamless Tank","Picnic Rose Bralette","Picnic Rose Highwaisted","Ocean Depths Eco Silk Blouse","Ocean Depths Eco Silk Shorts","Ocean Depths Eco Silk Pants","Spotted Panther Bralette","Spotted Panther Brief","Cactus Eco Silk Slip Dress","Cactus Eco Silk Tank Top","Cactus Eco Silk Shorts","Blue Opal Seamless Tank","Blue Opal Bralette","Castle Wall Eco Silk Tank Top","Castle Wall Eco Silk Blouse","Castle Wall Eco Silk Shorts","Brush Eco Silk Slip Dress","Brush Eco Silk Blouse","Brush Eco Silk Pants","Fallen Rock Seamless Tank","Blue Iris Bralette","Blue Iris Brief","Spotted Panther Eco Silk Long Slip Dress","Spotted Panther Eco Silk Tank Top","Spotted Panther Eco Silk Shorts","Sunkissed Brief","Ocean Depths Bra Bodysuit","Spotted Panther Bra Bodysuit","Black Bra Bodysuit","White Seamless Tank","White Thong","Lime Punch High Cut Highwaisted","Lime Punch Highwaisted","Lime Punch Brief","Espresso Brief","Picnic Rose Bikini","Spotted Panther Highwaisted","Fjord Blue Thong","Fjord Blue Highwaisted","Hyper Pink Mesh Brief","Hyper Pink Mesh Highwaisted","Lime Punch Mesh Bralette","Lime Punch Mesh Brief","Lime Punch Mesh Highwaisted","Grey Bralette","Grey Brief","Laurel Green Cotton Bralette","Keepsake Lilac Bralette","Keepsake Lilac Highwaisted","Keepsake Lilac Bikini","Rose Dust Thong","Laurel Green Cotton Brief","Laurel Green Cotton Bikini","Piki Highwaisted","Piki Bikini","Coral Pink Mesh Thong","Coral Pink Mesh Brief","Coral Pink Mesh Highwaisted","Caribbean Sea Mesh Thong","Caribbean Sea Mesh Highwaisted","Caribbean Sea Mesh Brief","Blue Opal Cotton Bralette","Blue Opal Cotton Brief","Blue Opal Cotton Bikini","Black Cotton Bralette","Black Cotton Brief","Black Cotton Bikini","Nude Brief","Nude Highwaisted","Black Mesh Brief","Lime Punch Eco Silk Scarf","Black Thong","Black Mesh Thong","Blue Opal Thong","Laurel Green Bralette","Provincial Blue Bralette","Blue Iris Cheeky","Blue Iris Highwaisted","Castor Grey Brief","El Sabor Thong","Lime Punch Bikini","White Brief","White Cheeky","Fallen Rock Cotton Brief","Black Cheeky","Fallen Rock Highwaisted","Fallen Rock Brief","Laurel Green Highwaisted","Strawberry Ice Brief","Fallen Rock Bikini","Fallen Rock Cotton Bralette","Black Highwaisted","Blue Opal Highwaisted","Fallen Rock Cotton Bikini","Fallen Rock Cotton Thong","Black Bikini","Grey Bikini","Grey Cheeky","Grey Highwaisted","Sleek Tiger Bikini","Grey Thong","White Highwaisted Thong","Black Highwaisted Thong","Laurel Green Cheeky","Blue Opal Bikini","Blue Opal Highwaisted Thong","Dark Palm Brief","Raindrop Thong","Sleek Tiger Brief","Sleek Tiger Highwaisted","Sleek Tiger Thong","Sunkissed Thong","Espresso Thong","Laurel Green Brief","Provincial Blue Brief","Fallen Rock Thong","Provincial Blue Thong","Fallen Rock Cheeky","Nude Thong","Nude Highwaisted Thong","Nude Cheeky","Castor Grey Thong","Peach Bloom Bralette"]
const len = pdps.length;
const half = Math.ceil(len/2);

for(let i = 14; i < pdps.length; i++){

    describe(`${i}. ${pdpName[i]} sku-${pdps[i]}`, () => {
        it(`pdp ${i} opens size`, () => {
            // get the items as an array
            // cy.get('#filtered-prod-listing > .item.ebyProdTile.epcWrapper.tileFilterable').each( (el, i) => {
            //     const pdp = Cypress.$(el).attr('data-prodsku')
            //     pdps.push(pdp)
            // });
            cy.get(`#eby-pdpid-${pdps[i]}`).then( el => {
                // cy.scrollTo(0, 0);
                cy.wait(5000);
                // cy.scrollTo(0, 50);
                cy.wrap(el).click();
            });
        });
        const size = 'div.swatch-element.lg';
        it(`clicks on size ${size}`,() => {
            const currentPdpForm = `#product-actions-${pdps[i]}`;
             
            cy.get(`${currentPdpForm} .proVariantsQuickview div.swatch.clearfix ${size}`).click({ force: true });
        });
        it(`Adds it to cart`, () => {  
            cy.get(`#eby-addpdp52111`).click()
        });
});
}