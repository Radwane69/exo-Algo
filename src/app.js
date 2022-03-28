import {
    name
} from 'commander';
import {
    v4 as uuidv4
} from 'uuid';

let hobbies = [{id: 1, name: 'Sport'}, {id: 2, name:'Cinéma'}, {id: 3, name: 'Voyage'}, {id: 4, name: 'Film'}, {id: 5, name: 'Jeux vidéo'}, {id: 6, name: 'Musculation'}, {id: 7, name: 'Jardinage'}, {id: 8, name: 'Peinture'}, {id: 9, name: 'Décoration intérieur'}, {id: 10, name: 'Jeux de société'},]

let user = [];
for (let i = 0; i < 1000; i++) {
    let id = uuidv4();
    user.push({
        id: id
    });
}
console.log(user);