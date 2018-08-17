let app = angular.module("showcase", []);

app.component('parentcomp', {
    template: `<input type="text" ng-model="$ctrl.message">
               <childcomp fromparent="$ctrl.message"></childcomp>`,
    controller: function parentController() {
        
    }
});

app.component('childcomp', {
    template: `<p>inside childcomp: {{ $ctrl.fromparent }}</p>
               <button ng-click="$ctrl.changeParent()">change fromparent</button>`,
    bindings: {
        fromparent: '='
    },
    controller: function parentController() {

        this.changeParent = () => {
            this.fromparent = 'changed in child.';
        }
    }
});

app.component('httpexample', {
    template: `<div ng-repeat="todo in $ctrl.todos"> <input type="checkbox" ng-model="todo.completed">{{ todo.title }}</div>`,
    controller: function parentController($http) {
        this.todos = [];

        $http({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos'
        }).
        then((response) => {
            console.log(response.status);
            this.todos = response.data;
        }, (reponse) => {
            if(response.status != 200) {
                // Olyckan
            }
        });
    }
});