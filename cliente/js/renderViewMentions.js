function setListMentions(data){
    let count = 0;
    let element = $('ul');
    let usuario;
    let concatenar = '';

    element.empty();
    for( let i in data){
        let twits = '';
        let usuarioInserido = false;
        let tweets = 0;
        count += 1;
       

        for ( let j = 0; j < data[i].length; j++){
            tweets += 1;

            if(!usuarioInserido){
                usuario = data[i][j].screen_name;
                usuarioInserido = true;
                console.log(usuario);
            }

            twits = twits + '<p>'+ tweets +  'º - Tweet' +
                                                    '</p><li>&nbsp&nbsp - <strong>Usuário</strong>: ' + data[i][j].screen_name + 
                                                        '<li>&nbsp&nbsp - <strong>Seguidores</strong>: ' + data[i][j].followers_count +
                                                        '<li>&nbsp&nbsp - <strong>Perfil</strong>: ' + data[i][j].profile_link +
                                                        '<li>&nbsp&nbsp - <strong>Data do Tweet</strong>: ' + data[i][j].created_at +
                                                        '<li>&nbsp&nbsp - <strong>Status</strong>: ' + data[i][j].link +
                                                        '<li>&nbsp&nbsp - <strong>Nºs Retweets</strong>: ' + data[i][j].retweet_count +
                                                        '<li>&nbsp&nbsp - <strong>Likes</strong>: ' + data[i][j].favorite_count +
                                                        '<li>&nbsp&nbsp - <strong>Mensagem</strong>: ' + data[i][j].text +
                                                        '<li><div align="center">-----------------------------------------</div>';
        }
        concatenar = '<li class="list-group-item"><p>#'+ count + ' - Usuario: ' + usuario +
                     '<div class="boxtwitter">' + '<ul>' + twits  + '<ul>'+ '</div>'
                     '</li>';
        element.append(concatenar);
    }
}

const fetchMostMentions = async function () {
    let response = await fetch(`${URL}/most_mentions`);  
    if(!response.ok){  
        throw new Error("Erro ao recuperar informações dos Twitters.");
    }

    let data = await response.json();
    console.log(data);
    setListMentions(data);
}