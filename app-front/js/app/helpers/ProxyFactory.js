class ProxyFactory {
    static create(objeto, props, action) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    return function(){
                        console.log(`método '${prop}' interceptado`);
                        Reflect.apply(target[prop], target, arguments);
                        action(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                if(props.includes(prop)) {
                    target[prop] = value;
                    action(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
}