const onj ={
    name: "kumar",
    some: function(){
        console.log(this);
    }
}

onj.some();
onj.some.call(this);