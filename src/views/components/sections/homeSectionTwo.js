import backgroundTwo from '../../../assets/images/background/bg2.jpg';
import darthVader from '../../../assets/images/elements/vader.png';
import footer from '../footer';

let TextContent = `
Esse é um projetinho feito com <3 durante a Afya Labs, parceria da Gama Academy com Afya Educacional e instruído pelo professor Douglas, o Brabo! Foram utilizadas as tecnologias: HTML, CSS, JavaScript e NodeJs. Agora um Lorem Ipsum maroto pra completar o bloco de texto :D <br/><br/>
Moff ahsoka yavin calamari. Chewbacca skywalker yoda organa kit organa. Hutt hutt twi'lek binks. Amidala darth lando mon. Grievous solo secura mandalore bespin chewbacca sebulba cade. Gamorrean palpatine organa organa yoda hutt antilles. C-3p0 luke skywalker luke mara mara gonk antilles gamorrean. Mara moff wookiee jinn dantooine skywalker qui-gon. Kashyyyk c-3po watto organa. Droid tusken raider aayla moff thrawn darth tusken raider. Binks cade antilles ahsoka. Yoda c-3p0 dantooine antilles secura organa calamari.    
`

let HomeSectionTwo = `
<section id="section-two" class="section background--two" style="background-image: url(${backgroundTwo})">
    <div class="container block-section">
        <div class="block-section--two">
            <img src="${darthVader}" alt="Vader">
            <div "text-block--two">
                <p>
                    ${TextContent}
                </p>
            </div>
        </div>
        <div class="block-section">
            ${footer}
        </div>
    </div>
</section>
`

export default HomeSectionTwo