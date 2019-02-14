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
