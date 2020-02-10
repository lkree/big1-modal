<?php

if (!empty($_POST))
{
  $message = "";
  foreach($_POST as $k => $v)
  {
    if (!is_array($v)) $message .= "<p><b>" . $k . "</b>: " . $v . "</p>";
    else
      {
        foreach($v as $key => $value)
        {
          $message .= "<p>" . $key . ": " . $value . "</p>";
        }
      }
  }

  $email = "test@gmail.com";
  $theme = 'Gvoz quiz';

  mail(email, theme, $message, "From: Гвоздь \r\n Reply-To: Gvozd Quiz \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
}
?>
