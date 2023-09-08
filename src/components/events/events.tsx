import GridComponent from '../commons/grid/Grid';
import ToolBar from '../commons/toolbar/toolBar';
const Events = () => {
  const data = [
    {
      id: 1,
      title: 'event-name-1',
      description: 'description',
    },
    {
      id: 2,
      title: 'event-name-1',
      description: 'description',
    },
    {
      id: 3,
      title: 'event-name-1',
      description: 'description',
    },
    {
      id: 4,
      title: 'event-name-1',
      description: 'description',
    },
    {
      id: 5,
      title: 'event-name-1',
      description: 'description',
    },
  ];

  return (
    <>
      <ToolBar text={'Events'} />
      <GridComponent data={data} />
    </>
  );
};

export default Events;
