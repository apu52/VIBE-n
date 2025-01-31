import { CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const BadgeUser = ({ user, handle }) => {
  return (
    <>
      <Box
        px={2}
        py={1}
        borderRadius={'lg'}
        m={1}
        mb={2}
        variant="solid"
        fontSize={12}
        backgroundColor={'grey'}
        color={'white'}
        cursor="pointer"
        onClick={handle}
      >
        {user.name}
        <CloseIcon pl={1} />
      </Box>
    </>
  );
};

export default BadgeUser;
