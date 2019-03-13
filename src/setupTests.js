import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import serializer from 'jest-emotion';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(serializer);
