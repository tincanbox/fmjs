// Make new FM_Promise with callbacks.
var d = FM.async.promise(
  // Register resolver.
  function(resolve) {
    setTimeout(function(){
      resolve({
        status: true,
        incr: 0
      });
    }, 2000);
  }
);

// Push additional callbacks.
// All 's' argument includes first resolving data at Line 41
// All 'p' argument includes previously returned value.
d.then(
  function(s, p){
    p.incr ++;
    return FM.async.promise(function(r){
      setTimeout(function(){
        r(p);
      }, 2000);
    });
  },
  function(s, p){
    // Error
  }
).then(
  function(s, p){
    return p.then(function(a, b){
      console.log('[async.promise]', b);
    });
  }
).then(
  function(s, p){
    setTimeout(function(){
      p.then(function(){
        console.log('[async.promise]', 'DONE');
      });
    }, 3000);
  }
);
