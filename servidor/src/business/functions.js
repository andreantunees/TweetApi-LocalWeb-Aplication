'use strict';

module.exports.montarRespostaTwitter = montarRespostaTwitter;
module.exports.montarRespostaUsuario = montarRespostaUsuario;

let locawebId = 42;
let twitterUrl = 'https://twitter.com/';

function montarRespostaTwitter(statuses) {
  let resposta = [];

  for (let i = 0; i < statuses.length; i++) {
    let twitter = statuses[i];
    let hasLocaWeb = twitter.entities
      .user_mentions.filter((t) => t.id == locawebId).length;

    if (hasLocaWeb && twitter.in_reply_to_user_id_str != locawebId) {
      let profile_link = twitterUrl + twitter.user.screen_name;

      resposta.push({
        followers_count : twitter.user.followers_count,
        screen_name : twitter.user.screen_name,
        profile_link: profile_link,
        created_at : twitter.created_at,
        link : profile_link + '/status/' + twitter.id_str,
        retweet_count : twitter.retweet_count,
        text : twitter.text,
        favorite_count : twitter.favorite_count,
        flag_anexado: 'N'
      });
    }
  };

  ordenarResposta(resposta);
  return resposta;
}
  
function montarRespostaUsuario(statuses) {
  let jsonResposta = montarRespostaTwitter(statuses);
  let resposta = {};

  for ( let j = 0; j < jsonResposta.length ; j++){
    let twitter = jsonResposta[j];
    
    let usuario = twitter.screen_name;

    resposta[usuario] = [];

    for( let k = 0; k < jsonResposta.length; k++){
      let twitters = jsonResposta[k];
      if( twitters.screen_name == usuario && twitters.flag_anexado == 'N'){
        resposta[usuario].push(
          twitters
        );
        twitterAnexado(jsonResposta,k);
        ordenarResposta(resposta[usuario]);
      }
    }
  };
  return resposta;
}
  
function twitterAnexado(array, indice){
  array[indice].flag_anexado = 'S';
}
  
function ordenarResposta(resposta){
  ordenarLike(resposta);
  ordenarRetweet(resposta);
  ordenarSeguidores(resposta);
}
  
function ordenarSeguidores(resposta){ 

  resposta.sort(function(a, b){
    if(a.followers_count < b.followers_count)
      return 1;
    else if( a.followers_count > b.followers_count)
      return -1;
    else
      return 0;
  });

  return resposta;
}

function ordenarRetweet(resposta){ 

  resposta.sort(function(a, b){
    if(a.retweet_count < b.retweet_count)
      return 1;
    else if( a.retweet_count > b.retweet_count)
      return -1;
    else
      return 0;
  });

  return resposta;
}

function ordenarLike(resposta){ 

  resposta.sort(function(a, b){
    if(a.favorite_count < b.favorite_count)
      return 1;
    else if( a.favorite_count > b.favorite_count)
      return -1;
    else
      return 0;
  });

  return resposta;
}
