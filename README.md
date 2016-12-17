# rythus-app




## React notes

### minimal ui state

all the pieces of data in the app

  * the cards.json data
    * IS NOT State
  * the selected menu item
    * IS state
    * id every 
      * CardView
      * Menu
    * common owner component
      * RythusCardsApp
  * the active card in the deck
    * IS state
    * id every component that renders something based on this state
      * CardView
      * MyCards
    * common owner component
      * RythusCardsApp
  * the list of MyCards
    * IS state
    * id every component that renders something based on this state
      * MyCards
      * CardView
    * common owner component
      * RythusCardsApp
