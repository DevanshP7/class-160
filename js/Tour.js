AFRAME.registerComponent("tour", {
  schema:{
    state : {type:'string',default:'place_list'},
    selected_card : {type:'string', default:''}
  },
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },
  hide:function(el){
    el.map((el)=>{
      el.setAttribute('visible',false)
    })
  },
  show:function(){
    var {selected_card} = this.data
    var main_container = document.querySelector('#main-container')
    main_container.setAttribute('material',{src:`./assets/360/${selected_card}/place-0.jpg`,color:'white'})
  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      console.log(borderEl)
      
      // Thumbnail Element
      thumbnailEl = this.createThumbnail(item)
     
      // Title Text Element
      textEl = this.createText(item,position)
      
      this.placesContainer.appendChild(borderEl)
      borderEl.appendChild(thumbnailEl)
      borderEl.appendChild(textEl)
    }
  },
  createBorder:function(position,id){
    border = document.createElement('a-entity')
    border.setAttribute('geometry',{primitive:'torus',radius:10,radiusTubular:0.2})
    border.setAttribute('material','color','blue')
    border.setAttribute('id',id)
    border.setAttribute('position',position)
    border.setAttribute('cursor-event',{})
    return border
  },
  createThumbnail:function(item){
    thumbnail = document.createElement('a-entity')
    thumbnail.setAttribute('material',{src:item.url})
    thumbnail.setAttribute('id',item.id)
    thumbnail.setAttribute('geometry',{primitive:'circle',radius:10})
    return thumbnail
  },
  createText:function(item,position){
    text = document.createElement('a-entity')
    text.setAttribute('text',{value:item.title,font:'exo2bold',width:100,color:'red',align:'center',})
    text.setAttribute('id',item.id)
    var position_1 = position
    position_1.y = -18
    text.setAttribute('position',position_1)
    console.log(position)
    return text
  },
  tick:function(){
    var state_var = document.querySelector('#places-container')
    state_value = state_var.getAttribute('tour')
    console.log(state_value.state)
    if(state_value.state=='view'){
      this.hide([this.el])
      this.show()
    }
  }

  
});
