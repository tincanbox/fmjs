
var s1 = FM.async.promise();
var s2 = FM.async.promise();

s1.label = "S1";
s2.label = "S2";

s1.then(function(){
  console.log('[async.swear] s1 done');
});

s2.then(function(){
  console.log('[async.swear] s2 done');
})

setTimeout(function(){
  s1.resolve(1);
}, 1000);

setTimeout(function(){
  s2.resolve(2);
}, 2000);

try{
  var s = FM.async.swear(s1, s2).then(function(r1, r2){
    console.log('[async.swear] Your oath was bound.', r1, r2);
  });
}catch(e){
  console.log(e);
}

