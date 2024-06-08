AFRAME.registerComponent('cursor-event',{
    schema:{
        selectedItemId : {type:'string',default:''}
    },
    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseExitEvent()
        this.handeMouseClickEvent()
    },
    getPlaces:function(){
        var id = this.el.getAttribute('id')
        var id_array = ['taj-mahal','budapest','eiffel-tower','new-york-city']
        console.log(id)

        if(id_array.includes(id)){
            var placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute('cursor-event',{selectedItemId:id})
            this.el.setAttribute('material','color','green')
            //console.log(id,id_array,placesContainer)
        }
    },
    getPlaces1:function(){
        var id = this.el.getAttribute('id')
        var id_array = ['taj-mahal','budapest','eiffel-tower','new-york-city']
        console.log(id)

        if(id_array.includes(id)){
            var placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute('cursor-event',{selectedItemId:id})
            this.el.setAttribute('material','color','blue')
            //console.log(id,id_array,placesContainer)
        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener('mouseenter',(e)=>{
            this.getPlaces()
            //console.log(this.getPlaces())
        })
    }
    ,
    handleMouseExitEvent:function(){
        this.el.addEventListener('mouseleave',(e)=>{
            this.getPlaces1()
            //console.log(this.getPlaces())
        })
    },
    handeMouseClickEvent:function(){
        this.el.addEventListener('click',(e)=>{
            var place_container = document.querySelector('#places-container')
            var {state} = place_container.getAttribute('tour')
            if(state=='place_list'){
                var id = this.el.getAttribute('id')
                id_array = ['taj-mahal','budapest','eiffel-tower','new-york-city']
                if(id_array.includes(id)){
                    place_container.setAttribute('tour',{state:'view',selected_card:id})
                }
            }
        })
    }
})