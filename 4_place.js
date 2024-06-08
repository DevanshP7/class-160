AFRAME.registerComponent('different_view',{
    init:function(){
        var state_element = document.querySelector('#places-container')
        var state_var = state_element.getAttribute('tour')
        console.log(state_var)
        if(state_var.state=='view'){
            this.different_views()
        }
        
    },
    different_views:function(){
        var xx = -10
        var yy = 2
        var zz = -9
        for(i=1;i<=5;i++){
            position = {x:xx+5,y:yy+1,z:zz}
            id = `heli${i}`
        }
        var helicopter_entity = this.createEntity('a-entity')
        helicopter_entity.setAttribute('visible',true)
        helicopter_entity.setAttribute('id',id)
        helicopter_entity.setAttribute('geometry',{primitive:'circle',radius:5})
        helicopter_entity.setAttribute('material',{src:'./assets/helicopter.png'})
        helicopter_entity.setAttribute('position',position)
        helicopter_entity.setAttribute('cursor-event',{})
        console.log(helicopter_entity)
        return helicopter_entity
    }
})