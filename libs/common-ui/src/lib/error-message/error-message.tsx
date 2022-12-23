import { Box } from "../box/box";
import { Icon } from "../icon/icon";
import Text from "../text/text";

export function ErrorMessage({message}: { message: string }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="md"
    >
      <Box  
        background="#ffdddd"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="40%"
        height="fit-content"
        borderRadius="lg"
        p="sm"
      >
        <Icon src='/icons/error.svg' width="20" />
        <Text pl="sm" data-testid="error-msg">{message}</Text>
      </Box>
    </Box>
  );
}

export default ErrorMessage;
