const onj ={
    name: "praveen",
    some: function(){
        console.log(this);
    }
}

onj.some();
onj.some.call(this);