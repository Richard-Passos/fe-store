import ListComponentItem from './Item';
import ListComponentRoot from './Root';
import ListComponentSubtitle from './Subtitle';

const ListComponent = ListComponentRoot;

ListComponent.Item = ListComponentItem;
ListComponent.Subtitle = ListComponentSubtitle;

export default ListComponent;
export {
  ListComponentRoot as ListComponent,
  ListComponentItem,
  ListComponentSubtitle,
};
