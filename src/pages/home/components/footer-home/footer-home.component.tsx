import { useForm } from "react-hook-form";

import { useCallback } from "react";

import { useAddMessage } from "../../../../shared/hooks/contexts/useAddMessage";

import { InputComment } from "./modules/input-comment/input-comment.module";

import { Container } from "./footer-home.styles";

type FormDataProps = {
  content: string;
};

const FooterHome: React.FC = () => {
  const { control, handleSubmit, reset, watch } = useForm();

  const { addNewMessage } = useAddMessage();

  const value = watch("content");

  const onSubmit = useCallback(({ content }: FormDataProps) => {
    addNewMessage({
      message: content,
      isMy: true,
    });

    reset();
  }, []);

  return (
    <Container>
      <InputComment
        isLoading={false}
        disable={!!value}
        control={control}
        name="content"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Container>
  );
};

export { FooterHome };
