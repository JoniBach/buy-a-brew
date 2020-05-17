const Beers = () => (
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>beers:</h4>
                {Object.keys(context.beers).map(id => (
                    <Car
                        key={id}
                        name={context.beers[id].name}
                        incrementPrice={() => context.incrementPrice(id)}
                        decrementPrice={() => context.decrementPrice(id)}
                    />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);