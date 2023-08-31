import builder from './graphqlBuilder';

// TODO: It would be cool to figure out a way to auto import these modules
import 'server/banking';
import 'server/properties';
import 'server/users';

const schema = builder.toSchema();
export default schema;
