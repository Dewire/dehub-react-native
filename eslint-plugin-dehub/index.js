
module.exports.rules = {
  'no-props-navigator': context => ({
    MemberExpression: (node) => {
      if (node.object.name === 'props' && node.property.name === 'navigator') {
        context.report(node, 'Do not use props.navigator directly. Use props.navigate() instead.');
      }
    },
  }),
};
