import LoadingButton from "@mui/lab/LoadingButton";

interface ILoadingBtn {
  children: React.ReactNode;
  loading: boolean;
  classes: string;
  type: "button" | "submit" | "reset";
  variant: "text" | "outlined" | "contained";
  style: Object;
  fullWidth: boolean;
}

const LoadingBtn: React.FC<ILoadingBtn> = ({
  children,
  loading,
  classes,
  type,
  variant,
  style,
  fullWidth,
}) => {
  return (
    <LoadingButton
      loading={loading}
      disabled={loading}
      className={classes}
      variant={variant}
      type={type}
      sx={style}
      fullWidth={fullWidth}
    >
      {children}
    </LoadingButton>
  );
};

export default LoadingBtn;
