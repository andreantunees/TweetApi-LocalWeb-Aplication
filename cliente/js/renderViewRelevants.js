function setListRelevants(data){
    let count = 0;
    let element = $('ul');
    var concatenar = '';

    element.empty();
    for( let i = 0; i < data.length ; i++){
       count += 1;
       concatenar = '<li class="list-group-item"><p>#'+ count +  
                                                '</p><ul>'    +
                                                '<li>&nbsp&nbsp - <strong>Usuário</strong>: ' + data[i].screen_name + 
                                                '<li>&nbsp&nbsp - <strong>Seguidores</strong>: ' + data[i].followers_count +
                                                '<li>&nbsp&nbsp - <strong>Perfil</strong>: ' + data[i].profile_link +
                                                '<li>&nbsp&nbsp - <strong>Data do Tweet</strong>: ' + data[i].created_at +
                                                '<li>&nbsp&nbsp - <strong>Status</strong>: ' + data[i].link +
                                                '<li>&nbsp&nbsp - <strong>Nºs Retweets</strong>: ' + data[i].retweet_count +
                                                '<li>&nbsp&nbsp - <strong>Likes</strong>: ' + data[i].favorite_count +
                                                '<li>&nbsp&nbsp - <strong>Mensagem</strong>: ' + data[i].text +
                                                '</ul>'
                    '</li>';
       element.append(concatenar);
    }
}

const fetchMostRelevants = async function(){
    let response = await fetch(`${URL}/most_relevants`);  
    if(!response.ok){  
        throw new Error("Erro ao recuperar informações dos Usuários.");
    }

    let data = await response.json();
    console.log(data);
    setListRelevants(data);
}    