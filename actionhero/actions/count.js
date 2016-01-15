exports.reactIncrementCounter = {
  name          : 'reactIncrementCounter',
  description   : 'I will return some basic information about me!',
  outputExample : {},
  inputs : {
    incrementBy : {},
  },

  run: function(api, data, next){
    api.redis.client.incrby('react-counter', parseInt(data.params.incrementBy || '1'), function(err, res){
      data.error = err;
      data.response.result = res
      next();
    })
    
  }
};

exports.reactGetCounter = {
  name          : 'reactGetCounter',
  description   : 'I will return some basic information about me!',
  outputExample : {},
  inputs : {
    incrementBy : {},
  },

  run: function(api, data, next){
    api.redis.client.get('react-counter', function(err, res){
      data.error = err;
      data.response.result = res
      next();
    })
    
  }
};