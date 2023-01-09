export function Copyright() {
  return (
    <>
      <p class="flex justify-center">
        Copyright ©&nbsp;
        <a
          class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="https://github.com/koji-1009"
        >
          Koji Wakamiya
        </a>
        &nbsp;{new Date().getFullYear()}
      </p>
    </>
  );
}
