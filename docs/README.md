```console
├── index.html
.
.
.
├── features
│   ├── feature_1
│   │   ├── components
│   │   ├── containers
│   │   ├── store         # first dynamic module
│   │   │   ├── actions.js
│   │   │   ├── mutations.js
│   │   │   ├── getters.js
│   │   │   ├── state.js
│   │   │   └── index.js
│   │   ├── Fetaure_1.vue
│   │   └── api.js
│   │
│   ├── feature_2
│   │   ├── components
│   │   ├── containers
│   │   ├── store.js      # second dynamic module
│   │   ├── Fetaure_2.vue
│   │   └── api.js
│   │
│   └── ...
│
└── store                 # root store
```


```javascript
export default {
  name: 'Home',
  computed: {
    ...mapGetters('home', ['getCount', 'getMsg'])
  },
  beforeCreate() {
    this.$store.registerModule('home', homeModule);
  },
  methods: {
    increase() {
      this.$store.dispatch('home/increaseAction');
    },
    reset() {
      this.$store.dispatch('home/resetAction');
    }
  }
};
```

```javascript
export default {
  name: 'Home',
  beforeCreate() {
      if (!(this.$store && this.$store.state && this.$store.state.home)) {
        this.$store.registerModule('home', homeModule);
      }
  },
  computed: {
    ...mapGetters('home', ['getCount', 'getMsg'])
  },
  methods: {
    increase() {
      this.$store.dispatch('home/increaseAction');
    },
    reset() {
      this.$store.dispatch('home/resetAction');
    }
  }
};
```

```json
[{
  id: 1,
  title: 'Some Article',
  author: {
    id: 1,
    name: 'Dan'
  }
}, {
  id: 2,
  title: 'Other Article',
  author: {
    id: 1,
    name: 'Dan'
  }
}]
```

```json5
{
  articles: [1, 2],
  users: [1],
  entities: {
    articles: {
      1: {
        id: 1,
        title: 'Some Article',
        author: 1
      },
      2: {
        id: 2,
        title: 'Other Article',
        author: 1
      }
    },
    users: {
      1: {
        id: 1,
        name: 'Dan'
      }
    }
  }
}
```

```javascript
const state = {
    ids: [ 'recipe1', 'recipe2', 'recipe3'],
    entities: {
      recipe1: {
        name: 'macarrones con tomate',
        time: 123413240981234,
        ingredients: [ 'ingr1', 'ingr2', 'ingr3']
      },
      recipe2: {
        name: 'lentejas',
        time: 123413240981234,
        ingredients: [ 'ingr6', 'ingr8', 'ingr9']
      },
      recipe3: {
        name: 'cocido madrileño',
        time: 123413240981234,
        ingredients: [ 'ingr6', 'ingr8', 'ingr9']
      }
    },
    entitiesStatus: []
};

```
