import * as React from 'react';
import {Image} from 'react-native';
import {Banner} from 'react-native-paper';

const MensajeBaner = mensaje => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      `${mensaje}`
    </Banner>
  );
};

export default MensajeBaner;
