entree = document.getElementById("entree")
entree.addEventListener("click", (e)=>{
    e.preventDefault()
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin",`

    <h2>ENTREE ET SALADES</h2>
              
    <div class="menu">
        <div class="choix">
    
            <h4>Catissou</h4>
            <div class="content">
                <div class="descript">
                    <p>Pâté au foie gras</p>
                </div>
                <div class="quantite">
                    <p>7.50€</p>
                </div>
            </div>
    
            <h4>Bloc de Foie Gras et ses toasts</h4>
            <div class="content">
                <div class="descript">
                    <p>Foie gras with toast</p>
                </div>
                <div class="quantite">
                    <p>13.50€</p>
                </div>
            </div>
    
            <h4>Saumon Fumé toast et son verre de Vodka glacé</h4>
            <div class="content">
                <div class="descript">
                    <p>Smoked salmon toast and a glass of iced vodka </p>
                </div>
                <div class="quantite">
                    <p>13.00€</p>
                </div>
            </div>
    
            <h4>Omelette au fromage Gouda</h4>
            <div class="content">
                <div class="descript">
                    <p>Gouda Cheese omelette</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Omelette au Jambon blanc</h4>
            <div class="content">                            
                <div class="descript">
                    <p>Ham omelette </p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Périgord</h4>
            <div class="content">                            
                <div class="descript">
                    <p>Salade, magret fumé, Fromage Rocamadour, Gésiers de canard, noix</p>
                    <p>Lettuce, smocked duck cheese rocamadour, gizzard, walnuts</p>
                </div>
                <div class="quantite">
                    <p>12.50€</p>
                </div>
            </div>
    
            <h4>Tulipe</h4>
            <div class="content">                            
                <div class="descript">
                    <p>Salade, pomme de terre, crevettes, asperges, oeufs, surimi</p>
                    <p>Lettuce, potatoes, shrimps, asparagus, egg, surimi</p>
                </div>
                <div class="quantite">
                    <p>9.00€</p>
                </div>
            </div>
    
            <h4>Grecque</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, tomates, fromage Féta, olives noires</p>
                    <p>Lettuce, tomatoes, féta cheese, black olive</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
           
        </div>
        <img src="images/menu/entree/salade1.jpg" alt="">
    </div>
    
    <div class="menu">
        <img src="images/menu/entree/salade2.jpg" class="cacher"alt="">
        <div class="choix">
            <h4>Aveyronnaise</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, Roquefort, lardons</p>
                    <p>Lettuce, fried bacon, roquefort cheese</p>    
                </div>
                <div class="quantite">
                    <p>7.80€</p>
                </div>
            </div>
           
            <h4>Norvégienne</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, saumon fumé, sauce citron à base de crème fraîche</p>
                    <p>Lettuce, smoked salmon, lemon sauce</p>
                </div>
                <div class="quantite">
                    <p>8.50€</p>
                </div>
            </div>
            
            <h4>Tartare</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, artichaud, oeuf, fromage tartare, noix</p>
                    <p>Lettuce, artichokes, egg, tartare cheese, walnuts</p>
                </div>
                <div class="quantite">
                    <p>7.80€</p>
                </div>
            </div>
    
            <h4>Imprévue</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, pomme de terre, oignons, lardons, Roquefort</p>
                    <p>Lettuce, potatoes, onions, fried bacon, roquefort cheese</p>
                </div>
                <div class="quantite">
                    <p>9.00€</p>
                </div>
            </div>
    
            <h4>Du Berger</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, fromage rocamadour, croûtons</p>
                    <p>Lettuce, goat's local cheese rocamadour, fried bread</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>D'Automne</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, pomme, fromage gouda, raisins secs, noix</p>
                    <p>Lettuce, apple, gouda cheese, raisins, walnuts</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Royale</h4>
            <div class="content">
                <div class="descript">
                    <p>Salade, pomme de terre, asperges, oeufs, saumon fumé</p>
                    <p>Lettuce, potatoes, asparagus, egg, smoked salmon</p>
                </div>
                <div class="quantite">
                    <p>11.20€</p>
                </div>
            </div>
    
            
        </div>
    </div>
    
    <div class="menu">
        <div class="choix">
            <h4>Salade aux Gésiers de canard</h4>
            <div class="content">
                <div class="descript">
                    <p>Lettuce with preserved gizzard</p>
                </div>
                <div class="quantite">
                    <p>7.80€</p>
                </div>
            </div>
            
            <h4>Salade aux lardons</h4>
            <div class="content">
                <div class="descript">
                    <p>Lettuce with fried bacon</p>
                </div>
                <div class="quantite">
                    <p>5.00€</p>
                </div>
            </div>
            
            <h4>Salade verte, tomates et oeufs</h4>
            <div class="content">
                <div class="descript">
                    <p>Lettuce tomatoes egg</p>
                </div>
                <div class="quantite">
                    <p>5.50€</p>
                </div>
            </div>
    
            <h4>Salade au Gouda et noix</h4>
            <div class="content">
                <div class="descript">
                    <p>Lettuce, goudacheese, walnuts </p>
                </div>
                <div class="quantite">
                    <p>6.00€</p>
                </div>
            </div>
    
            <h4>Salade verte</h4>
            <div class="content">
                <div class="descript">
                    <p>Green lettuce</p>
                </div>
                <div class="quantite">
                    <p>7.80€</p>
                </div>
            </div>
        </div>
        <img src="images/menu/entree/salade3.jpg" alt="">
    </div>
    
    `)
})

crepeSalee = document.getElementById("crepe_salee")
crepeSalee.addEventListener("click",(e)=>{
    e.preventDefault()
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin",
  `
<h2>PANNENKOEKEN GASTRONOMIQUES</h2>
          
<div class="menu">
    <div class="choix">

        <h4>Saint-Jacque Poêlées</h4>
        <div class="content">
            <div class="descript">
                <p>Saint-Jacques poêlées, fondue de poireaux</p>
                <p>Saint-Jacques seared, leeks </p>    
            </div>
            <div class="quantite">
                <p>21.00€</p>
            </div>
        </div>

        <h4>Saumon fumé</h4>
        <div class="content">                            
            <div class="descript">
                <p>Sauce crème fraîche citronné</p>
                <p>Smoked salmon, creamly lemon sauce</p>    
            </div>
            <div class="quantite">
                <p>14.00€</p>
            </div>
        </div>

        <h4>Savoyarde</h4>
        <div class="content">
            <div class="descript">
                <p>Poitrine fumée, pomme de terre, Fromage, Oignons</p>
                <p>Bacon, potatoes, Gouda cheese, onions </p>    
            </div>
            <div class="quantite">
                <p>13.00€</p>
            </div>
        </div>

        <h4>Magret fumé, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked duck, cheese</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Magret fumé, asperges, fromages</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked duck, esparagus, cheese</p>
            </div>
            <div class="quantite">
                <p>13.00€</p>
            </div>
        </div>

        <h4>Roquefort</h4>
        <div class="content">                            
            <div class="descript">
                <p>Sauce Roquefort crème fraîche, chiffonnade de salade, Noix</p>
                <p>Roquefort cheese sauce, lettece, walnuts</p>    
            </div>
            <div class="quantite">
                <p>12.00€</p>
            </div>
        </div>

        <h4>4 Fromages</h4>
        <div class="content">
            <div class="descript">
                <p>Camembert, Rocamadour, Gouda, crème de Roquefort accompagné d'une salade</p>
                <p>Camenbert, Goat cheese, Goudan Roquefort cream, salad</p>    
            </div>
            <div class="quantite">
                <p>14.00€</p>
            </div>
        </div>

    </div>
    <img src="images/menu/crepes_salees/saint-jacques.png" alt="">
</div>

<div class="menu">
    <img src="images/menu/crepes_salees/original.jpg" class="cacher" alt="">
    <div class="choix">
        
        <h4>Originale</h4>
        <div class="content">
            <div class="descript">
                <p>Myrtilles, fromage Rocamadour, miel</p>
                <p>Bluberries, rocamadour cheese, honey </p>
            </div>
            <div class="quantite">
                <p>13.00€</p>
            </div>
        </div>

        <h4>Goulasch - crêpe hongroise</h4>
        <div class="content">
            <div class="descript">
                <p>Viande de Boeuf en sauce, oigons, épices</p>
                <p>Hungarian crepe - Beef meat sauce, onions, spices</p>
            </div>
            <div class="quantite">
                <p>14.00€</p>
            </div>
        </div>

        <h4>Foie Gras, sauce trompettes des morts</h4>
        <div class="content">
            <div class="descript">
                <p>Foie gras, mushrooms sauce</p>
            </div>
            <div class="quantite">
                <p>17.00€</p>
            </div>
        </div>

        <h4>Asperges, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Asparagus, cheese</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Asperges, jambon, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Asparagus, cheese, ham</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Saucisse de Strasbourg, tomate, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Sausage, tomato, cheese</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Saucisse de Strasbourg, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Sausage, cheesen</p>
            </div>
            <div class="quantite">
                <p>13.00€</p>
            </div>
        </div>

        <h4>Chorizo, tomate, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Chorizo, tomato, cheese</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>


    </div>
</div>

<div class="menu">
    <div class="choix">
        <h4>Périgourdine</h4>
        <div class="content">                            
            <div class="descript">
                <p>Fromage, Rocamadour, miel, noix</p>
                <p>Goat Cheese, honey, nuts</p>    
            </div>
            <div class="quantite">
                <p>12.00€</p>
            </div>
        </div>

        <h4>Fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Cheese</p>
            </div>
            <div class="quantite">
                <p>8.50€</p>
            </div>
        </div>

        <h4>Fromage, champignons</h4>
        <div class="content">
            <div class="descript">
                <p>Cheese, mushrooms</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Fromage, gingembre</h4>
        <div class="content">
            <div class="descript">
                <p>Cheese, ginger</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>
        
        <h4>Fromage, ananas</h4>
        <div class="content">
            <div class="descript">
                <p>Cheese, pinapple</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>
        
        <h4>Fromage, raisins macérés</h4>
        <div class="content">
            <div class="descript">
                <p>Cheese, macerated raisins</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Fromage, pomme, raisins macèrés</h4>
        <div class="content">
            <div class="descript">
                <p>Cheese, apple, macerated raisins</p>    
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Poireaux, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Leeks, cheese</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Poireaux, jambon, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Leeks, ham, cheese</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>
       

       

      
    </div>
    <img src="images/menu/crepes_salees/perigourdine.jpg" alt="">
</div>

<div class="menu">
    <img src="images/menu/crepes_salees/vegetarienne.jpg" class="cacher" alt="">

    <div class="choix">
        <h4>Poireaux, poitrine fumée, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Leeks, smoked bacon, cheese</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Végétarienne</h4>
        <div class="content">
            <div class="descript">
                <p>Piperade maison, salade, oeuf au plat</p>
                <p>Home-made piperade, salad, fried egg</p>
            </div>
            <div class="quantite">
                <p>12.00€</p>
            </div>
        </div>

        <h4>Tomates, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Tomato, cheese</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Tomates, fromage, anchois</h4>
        <div class="content">
            <div class="descript">
                <p>Tomato, cheese, anchovy</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Tomates, jambon, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Tomato, ham, cheese</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Tomates, jambon, fromage, champignons</h4>
        <div class="content">
            <div class="descript">
                <p>Tomato, ham, cheese, mushrooms</p>
            </div>
            <div class="quantite">
                <p>13.00€</p>
            </div>
        </div>

        <h4>Jambon</h4>
        <div class="content">
            <div class="descript">
                <p>Ham</p>
            </div>
            <div class="quantite">
                <p>8.50€</p>
            </div>
        </div>

        <h4>Jambon, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Ham, cheese</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Jambon, fromage, champignons</h4>
        <div class="content">
            <div class="descript">
                <p>Ham, cheese, mushrooms</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

       
    </div>
</div>

<div class="menu">

    <div class="choix">
        <h4>Jambon, fromage, champignons, artichauts</h4>
        <div class="content">
            <div class="descript">
                <p>Ham, cheese, mushrooms, artichokes</p>
            </div>
            <div class="quantite">
                <p>13.00€</p>
            </div>
        </div>

        <h4>Atlantique</h4>
        <div class="content">
            <div class="descript">
                <p>Moules à la crème safranée</p>
                <p>Mussels, saffron sauce with cream</p>    
            </div>
            <div class="quantite">
                <p>13.00€</p>
            </div>
        </div>

        <h4>Poitrine fumée</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon</p>
            </div>
            <div class="quantite">
                <p>8.50€</p>
            </div>
        </div>

        <h4>Poitrine fumée, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, cheese</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Poitrine fumée, fromage, pomme</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, cheese, apple</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Poitrine fumé, fromage, champignons</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, cheese, mushrooms</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Poitrine fumé, ananas</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, pineapple</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>
        <h4>Poitrine fumé, fromage, ananas</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, cheese, pineapple</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>
       
        <h4>Poitrine fumé, tomate, fromage</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, tomato, cheese</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>


        

       
    </div>
    <img src="images/menu/crepes_salees/atlantique.jpg" alt="">

</div>

<div class="menu">
    <img src="images/menu/crepes_salees/blanquette.jpg" class="cacher" alt="">

    <div class="choix">
        
        <h4>Poitrine fumé, gingembre</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, ginger</p>
            </div>
            <div class="quantite">
                <p>10.00€</p>
            </div>
        </div>

        <h4>Poitrine fumé, fromage, gingembre</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, cheese, ginger</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>

        <h4>Poitrine fumé, fromage, raisins macérés</h4>
        <div class="content">
            <div class="descript">
                <p>Smoked bacon, cheese, macred raisins</p>
            </div>
            <div class="quantite">
                <p>11.50€</p>
            </div>
        </div>
    </div>
</div>

<h2>VIANDES</h2>

<div class="menu">

    <div class="choix">
        <h4>Bavette nature</h4>
        <div class="content">
            <div class="descript">
                <p>Flank steak</p>
            </div>
            <div class="quantite">
                <p>12.00€</p>
            </div>
        </div>

        <h4>Bavette sauce poivre vert</h4>
        <div class="content">
            <div class="descript">
                <p>Flank steak, green peeper sauce</p>
            </div>
            <div class="quantite">
                <p>13.70€</p>
            </div>
        </div>

        <h4>Goulash - Plat typique Hongrois</h4>
        <div class="content">
            <div class="descript">
                <p>Viande de Boeuf en sauce, oignons, épices</p>
                <p>Beef meat sauce, onions, spices</p>
            </div>
            <div class="quantite">
                <p>14.00€</p>
            </div>
        </div>

        <div class="commentaire">
                <h4>Toutes nos viandes sont accompagnées</h4>
            <div class="descript">
                <p>All our meat dishes are garnished</p>
            </div>
        </div>
    </div>
    <img src="images/menu/crepes_salees/goulash.jpg" alt="">


</div>

    `) 
})

poff = document.getElementById("poffs")
poff.addEventListener("click",(e)=>{
    e.preventDefault();
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin",`
    <div class="poff">
        <img src="images/galerie_photo/cuisson_poff.jpg"  alt="">
        <div class="present_poff">
            <h2>POFFERTJES</h2>
            <p>Les <strong>POFFERTJES</strong> sont une recette traditionnelle néerlandaise.<br/>
                Ressemblant à des petits beignets, les Poffertjes sont fait à base de levure et de différentes farine.<br/>
                Ils ont une texture légère et moelleuse grâce à leur cuisson sur une plaque en fonte.<br/>
            Les Poffertjes sont agrémentés de divers ingrédients et servis recouverts d'une fine pluie de sucre en glace.<br/>
            Les Tulipes vous propose de partager cette tradition hollandaise en dégustant des délicieuses variétés de poffertjes <span>fait maison</span>!</p>    
        </div>
        </div>

        <div class="poff">
        <div class="choix">
            <div class="portion">
                <div class="type_portion"><p>Demi</p> <p>6</p></div>
                <div class="type_portion"><p>Portion </p> <p> 12</p></div>
                <div class="type_portion"><p>Double</p> <p> 24</p></div>
            </div>

            <h4>Poffertjes Nature</h4>
            <div class="content">
                <div class="descript">
                    <p>Sucre, beurre</p>
                    <p>Sugar Butter</p>
                </div>
                <div class="quantite">
                    <p>3.50€</p>
                    <p>6.00€</p>
                    <p>10.00€</p>
                </div>
            </div>

            <h4>Poffertjes Gingembre confit</h4>
            <div class="content">
                <div class="descript">
                    <p>Ginger</p>
                </div>
                <div class="quantite">
                    <p>4.30€</p>
                    <p>7.00€</p>
                    <p>12.00€</p>
                </div>
            </div>

            <h4>Poffertjes Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Chocolate</p>
                </div>
                <div class="quantite">
                    <p>4.30€</p>
                    <p>7.00€</p>
                    <p>12.00€</p>
                </div>
            </div>

            <h4>Poffertjes Liqueur</h4>
            <div class="content">
                <div class="descript">
                    <p>Grand marnier; Cointrau, Rhum ou autres...</p>
                    <p>Liqueurs</p>
                </div>
                <div class="quantite">
                    <p>6.20€</p>
                    <p>8.50€</p>
                    <p>14.00€</p>
                </div>
            </div>

            <h4>Poffertjes Cerises</h4>
            <div class="content">                            
                <div class="descript">
                    <p>Cerises, kirsch, Galce vanille, Chantilly</p>
                    <p>Kirsch, liqueur, vanilla ice cream, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                    <p>9.00€</p>
                    <p>15.50€</p>
                </div>
            </div>
        </div>
        <img src="images/galerie_photo/poff2.jpg" class="cacher" alt="">
        </div>

        <div class="poff">
        <img src="images/galerie_photo/poff_chantilly.jpg"  alt="">
        <div class="choix">
            <div class="portion">
                <div class="type_portion"><p>Demi</p> <p>6</p></div>
                <div class="type_portion"><p>Portion </p> <p> 12</p></div>
                <div class="type_portion"><p>Double</p> <p> 24</p></div>
            </div>


            <h4>Poffertjes Caramel</h4>
            <div class="content">
                <div class="descript">
                    <p>Glace caramel, sauce caramel, Chantilly</p>
                    <p>Caramel sauce & ice cream; whipped cream</p>
                </div>
                <div class="quantite">
                    <p>6.20€</p>
                    <p>8.50€</p>
                    <p>14.00€</p>
                </div>
            </div>

            <h4>Poffertjes Framboises</h4>
            <div class="content">
                <div class="descript">
                    <p>Framboises, liqueur de framboises, glace vanille, chantilly</p>
                    <p>Raspberries, raspberry liqueur, vanilla ice cream, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                    <p>9.00€</p>
                    <p>15.50€</p>
                </div>
            </div>

            <h4>Poffertjes Raisins</h4>
            <div class="content">
                <div class="descript">
                    <p>Rainsins macérés, Glace malaga, Chantilly</p>
                    <p>Macred raisins, malaga ice cream, whipped cream </p>
                </div>
                <div class="quantite">
                    <p>6.20€</p>
                    <p>8.50€</p>
                    <p>14.00€</p>
                </div>
            </div>

            <h4>Poffertjes Emeraude</h4>
            <div class="content">
                <div class="descript">
                    <p>Coulis de Pistache, glace pistache, amandes effilées</p>
                    <p>Pistachio coulis, pistachio ice cream, almonds</p>
                </div>
                <div class="quantite">
                    <p>6.20€</p>
                    <p>8.50€</p>
                    <p>14.00€</p>
                </div>
            </div>
            
        </div>
    </div>
    `)
})

crepeSucree = document.getElementById("crepe_sucree")
crepeSucree.addEventListener("click",(e)=>{
    e.preventDefault();
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin",`
    <h2>Crèpes Sucrées</h2>
              
    <div class="menu">
        <div class="choix">
    
            <h4>Emeraude</h4>
            <div class="content">
                <div class="descript">
                    <p>Glace Pistache, amandes, sauce pistache</p>
                    <p>Pistachio ice cream and sauce</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Violette</h4>
            <div class="content">                            
                <div class="descript">
                    <p>Glace à la violette, Gelée de Violette (fait maison)</p>
                    <p>Violet ice cream and violet jelly</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
    
            <h4>Pomme-crumble</h4>
            <div class="content">
                <div class="descript">
                    <p>Pomme cannelle, Glace cannelle, crumble, chantilly</p>
                    <p>Apple cinnamon, crumble, cinnamon ice cream, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>10.80€</p>
                </div>
            </div>
    
            <h4>Sweet</h4>
            <div class="content">
                <div class="descript">
                    <p>Glace caramel, sauce caramel, chantilly</p>
                    <p>Caramel sauce & ice cream, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Sucre Glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Icing sugar</p>
                </div>
                <div class="quantite">
                    <p>4.70€</p>
                </div>
            </div>
            
            <h4>Sucre Brun</h4>
            <div class="content">
                <div class="descript">
                    <p>Brown sugar</p>
                </div>
                <div class="quantite">
                    <p>4.70€</p>
                </div>
            </div>
            
            <h4>Sucre beurre</h4>
            <div class="content">
                <div class="descript">
                    <p>Icing sugar, butter</p>    
                </div>
                <div class="quantite">
                    <p>5.00€</p>
                </div>
            </div>
    
            <h4>Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Whipped cream</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
        </div>
        <img src="images/menu/crepes_sucrees/banane.jpg" alt="">
    </div>
    
    <div class="menu">
        <img src="images/menu/crepes_sucrees/banane.jpg" class="cacher" alt="">
        <div class="choix">
            <h4>Crèpe à la liqueur au choix</h4>
            <div class="content">
                <div class="descript">
                    <p>Grand Marnier, Calvados, Rhum, Cointreau, Liqueur de poires, etc</p>
                    <p>Crêpe flanbée sur demande</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Chocolate</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>chocolat, chantilly</h4>
            <div class="content">                            
                <div class="descript">
                    <p>Chocolate, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Chocolat, Amandes</h4>
            <div class="content">
                <div class="descript">
                    <p>chocolate, almonds</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Chocolat, Grand Marnier</h4>
            <div class="content">
                <div class="descript">
                    <p>Chocolate, liqueur</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Chocolat, Grand Marnier, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Chocolate, liqueur, whipped cream </p>
                </div>
                <div class="quantite">
                    <p>10.50€</p>
                </div>
            </div>
    
            <h4>Gingembre confit</h4>
            <div class="content">
                <div class="descript">
                    <p>Ginger</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Gingembre, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Ginger, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Gingembre, Glace, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Ginger, liqueur, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            
        </div>
    </div>
    
    <div class="menu">
        <div class="choix">
            <h4>Mélasse</h4>
            <div class="content">
                <div class="descript">
                    <p>Stroop Treacle</p>
                </div>
                <div class="quantite">
                    <p>4.70€</p>
                </div>
            </div>
    
    
            <h4>Marmelade de figue et noix</h4>
            <div class="content">
                <div class="descript">
                    <p>Fig Marmelade, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>  
    
            <h4>Miel</h4>
            <div class="content">
                <div class="descript">
                    <p>Honey</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Miel, noix du Périgord</h4>
            <div class="content">
                <div class="descript">
                    <p>Honey, Périgors walnuts</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
            
            <h4>Citron</h4>
            <div class="content">
                <div class="descript">
                    <p>Lemon</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Citron, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Lemon, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Ananas</h4>
            <div class="content">
                <div class="descript">
                    <p>Pineapple</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Ananas, Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Pineapple, chocolate</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Ananas, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Pineapple, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
           
        </div>
        <img src="images/menu/crepes_sucrees/banane.jpg" alt="">
    </div>
    
    <div class="menu">
        <img src="images/menu/crepes_sucrees/banane.jpg" class="cacher" alt="">
    
        <div class="choix">
            <h4>Ananas, Chocolat, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Pineapple, Chocolate, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Ananas, Grand Marnier</h4>
            <div class="content">
                <div class="descript">
                    <p>Pineapple, liqueur</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Ananas, Grand Marnier, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Pineapple, Liqueur, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>10.50€</p>
                </div>
            </div>
    
            <h4>Confiture, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Jam, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Banane</h4>
            <div class="content">
                <div class="descript">
                    <p>Banana</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
            <h4>Banane, Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Banana, chocolate</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Banane, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Banana, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Banane, chocolat, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Banana, chocolate, whipped cream</p>    
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
            
            <h4>Banane, Grand Marnier</h4>
            <div class="content">
                <div class="descript">
                    <p>Banana, liqueur</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
           
        </div>
    </div>
    
    <div class="menu">
        <div class="choix">
            <h4>Banane, Grand Marnier, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Banana, liqueur, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>10.50€</p>
                </div>
            </div>
    
            <h4>Noix de coco Râpé, chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Coconut, chocolate</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Noix de coco Râpé, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Coconut, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Noix de coco Râpé, chocolat, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Coconut, chocolate, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
           
            <h4>Glace Vanille</h4>
            <div class="content">
                <div class="descript">
                    <p>Vanilla Ice cream</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Glace Vanille, Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Vanilla Ice cream, Chocolate</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Glace Vanille, Chocolate, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Vanilla Ice cream, Chocolate, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Glace Vanille, Miel</h4>
            <div class="content">
                <div class="descript">
                    <p>Vanilla Ice cream, honey</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Glace Vanille, Chantilly, Grand Marnier</h4>
            <div class="content">
                <div class="descript">
                    <p>Vanilla Ice cream, whipped cream, liqueur</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
        </div>
        <img src="images/menu/crepes_sucrees/banane.jpg" alt="">
    
    </div>
    
    <div class="menu">
        <img src="images/menu/crepes_sucrees/banane.jpg" class="cacher" alt="">
    
        <div class="choix">
            
            <h4>Glace Vanille, Amandes, Miel</h4>
            <div class="content">
                <div class="descript">
                    <p>Vanilla Ice cream, Almonds, honey</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Crème de marron</h4>
            <div class="content">
                <div class="descript">
                    <p>Pureed chestnuts</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Crème de marron, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Pureed chestnuts, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Crème de marron, chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Pureed chestnuts, chocolate</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Crème de marron, chocolat, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Pureed chestnuts, chocolate, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
           
            <h4>Framboises</h4>
            <div class="content">
                <div class="descript">
                    <p>Raspberries</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Framboises, Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Raspberries, chocolate</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Framboises, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Raspberries, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Framboises, liqueur de framboises</h4>
            <div class="content">
                <div class="descript">
                    <p>Raspberries, liqueur</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
        </div>
    </div>
    
    <div class="menu">
    
        <div class="choix">
            
            <h4>Framboises, Mandarines, Glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Raspberries, tangerines, ice cream</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Framboises, Amande, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Raspberries, almonds, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Framboises, Glace, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Raspberries, ice creal, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Glace à la menthe, Amandes, Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Mint ice cream, almonds, chocolate</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Pomme, Cannelle</h4>
            <div class="content">
                <div class="descript">
                    <p>Apple, cinnamon</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Pomme, Cannelle, Calvados</h4>
            <div class="content">
                <div class="descript">
                    <p>Apple, cinnamon, calvados</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Pomme, Cannelle, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Apple, cinnamon, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Pomme, Cannelle, Chantilly, Glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Apple, cinnamon, whipped cream, ice cream</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Pomme, Cannelle, Glace cannelle, raisins macérés</h4>
            <div class="content">
                <div class="descript">
                    <p>Apple, cinnamon, cinnamon ice cream, macerated raisins</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
        </div>
        <img src="images/menu/crepes_sucrees/banane.jpg" alt="">
    
    </div>
    
    <div class="menu">
        <img src="images/menu/crepes_sucrees/banane.jpg" class="cacher" alt="">
    
        <div class="choix">
            
            <h4>Cerise, glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Cherry, vanilla ice</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Cerise, Kirsh, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Cherry, Kirsh, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>11.50€</p>
                </div>
            </div>
    
            <h4>Cerise, glace, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Cherry, ice cream, chantilly</p>
                </div>
                <div class="quantite">
                    <p>11.50€</p>
                </div>
            </div>
    
            <h4>Pêches</h4>
            <div class="content">
                <div class="descript">
                    <p>Peach</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Pêches, Chatilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Peach, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.50€</p>
                </div>
            </div>
    
            <h4>Pêches, Miel, Glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Peach, honey, ice cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Pêches, Amandes, Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Peach, almonds, chocolate</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Pêches, Amandes, Glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Peach, almonds, ice cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Pêches, Chocolat, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Peach, chocolate, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
        </div>
    
    </div>
    
    <div class="menu">
    
        <div class="choix">
            <h4>Myrtilles</h4>
            <div class="content">
                <div class="descript">
                    <p>Blueberries</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Myrtilles, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Blueberries, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Myrtilles, Glace cassis</h4>
            <div class="content">
                <div class="descript">
                    <p>Blueberries, blackcurrant sorbet ice cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Myrtilles, Glace, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Blueberries, ice cream, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Myrtilles, Glace, Chantilly, Liqueur de myrtilles</h4>
            <div class="content">
                <div class="descript">
                    <p>Blueberries, ice cream, whipped cream, liqueur</p>
                </div>
                <div class="quantite">
                    <p>12.50€</p>
                </div>
            </div>
    
            <h4>Myrtilles, Liqueur, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Blueberries, liqueur, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Poires</h4>
            <div class="content">
                <div class="descript">
                    <p>Pears</p>
                </div>
                <div class="quantite">
                    <p>6.50€</p>
                </div>
            </div>
    
            <h4>Poires, Chocolat</h4>
            <div class="content">
                <div class="descript">
                    <p>Pears, chocolate</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Poires, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Pears, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            
            
        </div>
        <img src="images/menu/crepes_sucrees/banane.jpg" alt="">
    
    </div>
    
    <div class="menu">
        <img src="images/menu/crepes_sucrees/banane.jpg" alt="">
    
        <div class="choix">
            <h4>Poires, Chocolat, Liqueur de poires</h4>
            <div class="content">
                <div class="descript">
                    <p>Pears, chocolate, liqueur</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Poires, Glace, Chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Pears, ice cream, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Poires, Amandes, Glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Pears, almonds, ice cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Mandarines</h4>
            <div class="content">
                <div class="descript">
                    <p>Tangerines</p>
                </div>
                <div class="quantite">
                    <p>8.00€</p>
                </div>
            </div>
    
            <h4>Mandarines, liqueur de mandarines</h4>
            <div class="content">
                <div class="descript">
                    <p>Tangerines, liqueur</p>
                </div>
                <div class="quantite">
                    <p>9.80€</p>
                </div>
            </div>
    
            <h4>Mandarines, glace</h4>
            <div class="content">
                <div class="descript">
                    <p>Tangerines, ice cream</p>
                </div>
                <div class="quantite">
                    <p>9.50€</p>
                </div>
            </div>
    
            <h4>Mandarines, glace, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Tangerines, ice cream, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>11.00€</p>
                </div>
            </div>
    
            <h4>Mandarines, amandes, glace, liqueur de mandarines</h4>
            <div class="content">
                <div class="descript">
                    <p>Tangerines, almonds, ice cream, liqueur</p>
                </div>
                <div class="quantite">
                    <p>12.50€</p>
                </div>
            </div>
    
            <h4>Mandarines, amandes, glace, liqueur de mandarine, chantilly</h4>
            <div class="content">
                <div class="descript">
                    <p>Tangerines, almonds, ice cream, liqueur, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>13.80€</p>
                </div>
            </div>
        </div>
    </div>
    
    
    `)
})

dessert = document.getElementById("dessert")
dessert.addEventListener("click", (e)=>{
    e.preventDefault();
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin",`
    <div class="poff">
    <img src="images/menu/advoocat1.jpg" alt="">
    <div class="present_poff">
        <h2>ADVOCAAT</h2>
        <p>L'<strong>Advocaat</strong> est une liqueur moelleuse, originaire des Pays Bas, à base de jaune d'oeufs,
            de sucre, de vanille et d'alcool, ici du Brandy</p>
            <p>Un peu d'histoire, <br/>
                À l'origine l'Advocaat provient d'Amérique du Sud, il fut crée au Surinam (Guyane hollandaise) et portait 
            le nom de Ahuacate.</p>
        
            <div class="advocaat">
                <div class="descript">
                    <p>Liqueur, jaune d'oeuf, crème chantilly</p>
                    <p>liqueur, egg yolk, whipped cream</p>
                </div>
                <div class="quantite">
                    <p>7€00€</p>
                </div>
            </div>
        
    </div>
        
    </div>
    
    <div class="poff">
    
    <div class="choix">
        
    
        <h4>Café gourmand</h4>
        <div class="content">
            <div class="descript">
                <p>Mini crême brûlée, dessert fruit rouge et crumble, glace du moment</p>
                <p>Mini creme vrulee, dessert and red fruit crumble, ice cream</p>
            </div>
            <div class="quantite">
                <p>7€20€</p>
            </div>
        </div>
    
        <h4>Salade de fruits</h4>
        <div class="content">
            <div class="descript">
                <p>Fuits salads</p>
            </div>
            <div class="quantite">
                <p>6.80€</p>
            </div>
        </div>
    
        <h4>Profiteroles</h4>
        <div class="content">
            <div class="descript">
                <p>Fait maison accompagné de chantilly</p>
                <p>Profiteroles with hot chocolate, whipped cream</p>
            </div>
            <div class="quantite">
                <p>6.80€</p>
            </div>
        </div>
    
        <h4>Pêche Melba</h4>
        <div class="content">
            <div class="descript">
                <p>Pêche, sauce à la fraise, glace vanille, chantilly</p>
                <p>Peach, strawberry sauce, vanilla ice cream, whipped cream</p>
            </div>
            <div class="quantite">
                <p>6.80€</p>
            </div>
        </div>
    
        <h4>Poire belle Hélène</h4>
        <div class="content">
            <div class="descript">
                <p>Poire, glace vanille et chocolat, chantilly</p>
                <p>Pear, vanilla and chocolate ice cream, whipped cream</p>
            </div>
            <div class="quantite">
                <p>6.80€</p>
            </div>
        </div>
    
        <h4>Samba</h4>
        <div class="content">
            <div class="descript">
                <p>Glace caramel, sauce caramel, banane, chantilly</p>
                <p>Caramel ice cream, caramel sauce, banana, whipped cream</p>
            </div>
            <div class="quantite">
                <p>6.80€</p>
            </div>
        </div>
    
    </div>
    <img src="images/menu/crepes_sucrees/mandarine.jpg" class="cacher" alt="">
    
    </div>
    
    <div class="poff">
    <img src="images/menu/crepes_sucrees/mandarine.jpg" class="cacher" alt="">
    
    <div class="choix">
        <h4>Café ou Chocolat liegeois</h4>
        <div class="content">
            <div class="descript">
                <p>Café ou chocolat, glace vanille, sauce café, chantilly</p>
                <p>Coffee of chocolate, vanilla ice cream, coffe sauce, whipped cream</p>
            </div>
            <div class="quantite">
                <p>6.50€</p>
            </div>
        </div>
    
        <h4>Coupe africaine</h4>
        <div class="content">
            <div class="descript">
                <p>Glace noix de coco, chocolat chaud</p>
                <p>Coconut ice cream, hot chocolate</p>
            </div>
            <div class="quantite">
                <p>6.50€</p>
            </div>
        </div>
    
        <h4>Dame blanche</h4>
        <div class="content">
            <div class="descript">
                <p>Glace vanille, chocolat chaud, chantilly</p>
                <p>Vanilla ice cream, hot chocolate, whipped cream</p>
            </div>
            <div class="quantite">
                <p>7.00€</p>
            </div>
        </div>
    
        <h4>Banana Split</h4>
        <div class="content">
            <div class="descript">
                <p>Banane, glace vanille et chocolat, chocolat chaud, chantilly</p>
                <p>Banana, vanilla and chocolate ice cream, hot choco, whipped cream</p>
            </div>
            <div class="quantite">
                <p>7.00€</p>
            </div>
        </div>
    
        <h4>Coupe maison</h4>
        <div class="content">
            <div class="descript">
                <p>Glace vanille, framboise, liqueur de framboise, chantilly</p>
                <p>Vanilla ice cream, respberry, raspberry liqueur, whipped cream</p>
            </div>
            <div class="quantite">
                <p>7.00€</p>
            </div>
        </div>
    
      
    
        
    </div>
    
    </div>
    
    <div class="poff">
    
    <div class="choix">
       
        <h4>Lambada</h4>
        <div class="content">
            <div class="descript">
                <p>Banane, ananas, glace vanille et café, sauce café, chantilly</p>
                <p>Banana, pineapple, vanilla & coffee ice cream, coffe sauce, whipped cream</p>
            </div>
            <div class="quantite">
                <p>7.00€</p>
            </div>
        </div>
    
        <h4>Swing</h4>
        <div class="content">
            <div class="descript">
                <p>Ananas, cerises, kirsh, glace vanille, chantilly</p>
                <p>Pineapple, cherry, kirsh, vanilla ice cream, whipped cream</p>
            </div>
            <div class="quantite">
                <p>7.80€</p>
            </div>
        </div>
    
        <h4>Tango</h4>
        <div class="content">
            <div class="descript">
                <p>Glace vanille, mandarines, liqueur de mandarines, amandes, chantilly</p>
                <p>Vanilla ice cream, mandarins, liqueur of mandarins, almonds, whipped cream</p>
            </div>
            <div class="quantite">
                <p>7.60€</p>
            </div>
        </div>
    
        <h4>Colonel</h4>
        <div class="content">
            <div class="descript">
                <p>Sorbet citron, vodka</p>
                <p>Lemon sorbet, vodka</p>
            </div>
            <div class="quantite">
                <p>7.60€</p>
            </div>
        </div>
    
        <h4>Irish coupe</h4>
        <div class="content">
            <div class="descript">
                <p>Glace café, glace caramel, Baileys</p>
                <p>Coffe ice cream, caramel ice cream, Baileys</p>
            </div>
            <div class="quantite">
                <p>8.00€</p>
            </div>
        </div>
    
       
    
    </div>
    <img src="images/menu/crepes_sucrees/mandarine.jpg" alt="">
    
    </div>
    
    
    `)
})

menuEnfant = document.getElementById("menu_enfant");
menuEnfant.addEventListener("click", (e)=>{
    e.preventDefault()
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin",`
    <div id="enfant">

        <img src="./images/menu/enfant/enfant1.jpg" alt="" class="img1">
        <div id="choix_enfant">
                <h2>MENU ENFANT </h2>
                <p>Children's menu  jusqu'à 12 ans</p>
                
                <div class="choix_enfant">
                    <div class="title">
                        <p>Petite crêpe au jambon ou fromage</p>
                    </div>
                    <div class="description">
                        <div>
                            <p>Mini ham pancake or mini cheese pancake</p>
                        </div>
                    </div>
                    <div> <p> &</p> </div>
                    <div class="title">
                        <p>Petite crêpe au chocolat ou 6 poofertjes ou une coupe glacée 2 boules</p>
                    </div>
                    <div class="description">
                        <div>
                            <p>Mini chocolat pancake or 6 poffertjes or ice cream</p>
                        </div>
                    </div>
                    <div class="prix"> 9.00€</div>
                    <div><p><em>Ingrédient supplémentaire 1.60€</em></p></div>
                </div>
        </div>
        <img src="./images/menu/enfant/enfant2.jpg" alt="" class="img2">
    </div>
    `)
})

galeriePhotos = document.getElementById("galerie_photos")
galeriePhotos.addEventListener("click", (e)=>{
    e.preventDefault()
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin", `
    <div id="photo">
    <div id="derriere"> 
        <img src="images/appareil.jpg" alt="">

    </div>

    <div class="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3600000">
        <!-- Carrousel -->
        <div class="carousel-inner">
            <div class="carousel-item active" >
                <div class="menu">
                        <div class="image_galerie">
                            <figure>
                                <h2>GALERIE PHOTOS</h2>
                                <img src="images/galerie_photo/crepe_banane.jpg" alt="">
                                <figcaption>
                                    <p>crêpe banane</p>
                                </figcaption>
                            </figure>
                        </div>
                </div>
            </div>

            <div class="carousel-item" >
                <div class="menu">
                    <div class="image_galerie">
                        <figure>
                            <h2>GALERIE PHOTOS</h2>
                            <img src="images/galerie_photo/crepe_mandarine.jpg" alt="">
                            <figcaption>
                                <p>crêpe mandarine</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            <div class="carousel-item" >
                <div class="menu">
                    <figure>
                        <h2>GALERIE PHOTOS</h2>
                        <img src="images/galerie_photo/cuisson_poff.jpg" alt="">
                        <figcaption>
                            <p>cuisson des poffertjes</p>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div class="carousel-item" >
                <div class="menu">
                    <figure>
                        <h2>GALERIE PHOTOS</h2>
                        <img src="images/galerie_photo/poffertjes1.jpg" alt="">
                        <figcaption>
                            <p>poffertjes</p>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div class="carousel-item" >
                <div class="menu">
                    <figure>
                        <h2>GALERIE PHOTOS</h2>
                        <img src="images/galerie_photo/poff_chantilly.jpg" alt="">
                        <figcaption>
                            <p>poffertjes chantilly</p>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </div>

        <!-- Contrôles -->
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev" >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Précédent</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Suivant</span>
        </a>

        </div>
    </div>


</div>

    `)
})

contact = document.getElementById("contact")
contact.addEventListener("click", (e)=>{
    e.preventDefault()
    affiche = document.querySelector("#carte")

    affiche.innerHTML =" "
    affiche.insertAdjacentHTML("afterbegin", `
    <div id="contact-crepe">
    <div id="derriere">
        <img  src="images/crepe_banane.jpg" alt="">
        <div class="contact">
            <div class="horaire">
                <h1>Horaires</h1>
                <p>Nos horaires d'ouverture de septembre à Juin :<br/>
                <p>Lundi : FERMEE <br/>
                    Mardi : 12:00 - 14:00 / 19:00 - 22:00 <br/>
                    Mercredi : 12:00 - 14:00 / 19:00 - 22:00 <br/>
                    Jeudi : 12:00 - 14:00 / 19:00 - 22:00 <br/>
                    Vendredi : 12:00 - 14:00 / 19:00 - 22:00 <br/>
                    Samedi : 12:00 - 14:00 / 19:00 - 22:00 <br/>
                    Dimanche : 12:00 - 14:00 / 19:00 - 22:00 <br/>
                </p>
                <p>
                    Juillet-août ouvert 7j sur 7<br/>
                    12:00 - 14:30 / 18:45 - 22:00

                </p>

            </div>
            <div class="numero">
                <h1>Contact</h1>
                <p>Vous pouvez nous joindre au :<br/>
                    05.53.29.61.89
                </p>
            </div>
            <div class="map">
                <h2>Nous localiser</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.9883450081968!2d1.2133997921369115!3d44.89404674208284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aca9d8c6ae30a9%3A0x288e644d6df5d8ba!2sCr%C3%AAperie%20-%20Restaurant%20-%20Les%20Tulipes!5e0!3m2!1sfr!2sfr!4v1622755864260!5m2!1sfr!2sfr" width="850" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</div>


    `)

})