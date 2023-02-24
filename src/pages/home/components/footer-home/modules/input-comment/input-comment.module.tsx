import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

import { useTheme } from "styled-components/native";

import {
  Input,
  IconSend,
  Container,
  ButtonIcon,
  LoadInput,
} from "./input-comment.styles";

interface InputCommentProps extends TextInputProps {
  control: Control;
  name: string;
  isLoading: boolean;
  disable: boolean;
  onSubmit(): Promise<void>;
}

const InputComment: React.FC<InputCommentProps> = ({
  control,
  name,
  isLoading,
  disable,
  onSubmit,
  ...rest
}) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <Input
            {...field}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={COLORS.TEXT_LOW}
            multiline
            placeholder="Adicionar um comentário"
            {...rest}
          />
        )}
      />

      <ButtonIcon onPress={onSubmit}>
        {isLoading ? (
          <LoadInput animating={isLoading} />
        ) : (
          <IconSend color={!disable ? COLORS.TEXT_LOW : COLORS.PRIMARY} />
        )}
      </ButtonIcon>
    </Container>
  );
};

export { InputComment };
