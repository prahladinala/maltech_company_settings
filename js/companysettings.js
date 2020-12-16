function profileValidator() {
  const company_name_input = document.getElementById("company_name");
  const first_name_input = document.getElementById("first_name");
  const last_name_input = document.getElementById("last_name");
  const email_addr_input = document.getElementById("email_addr");
  const phone_num_input = document.getElementById("phone_num");
  const company_site_input = document.getElementById("company_site");

  const company_name_err = document.getElementById("cn_error_message");
  const first_name_err = document.getElementById("fn_error_message");
  const last_name_err = document.getElementById("ln_error_message");
  const email_addr_err = document.getElementById("email_error_message");
  const phone_num_err = document.getElementById("phn_error_message");
  const company_site_err = document.getElementById("site_error_message");

  const company_name = document.getElementById("company_name").value;
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email_addr = document.getElementById("email_addr").value;
  const phone_num = document.getElementById("phone_num").value;
  const company_site = document.getElementById("company_site").value;

  const home_link = document.getElementById("home-tab");
  const account_link = document.getElementById("profile-tab");
  const address_link = document.getElementById("contact-tab");
  const submission_link = document.getElementById("submit-tab");

  if (company_name == null || company_name == "") {
    company_name_input.setAttribute("class", "invalid");
    company_name_err.classList.remove("errorMessage");
  } else {
    if (first_name == null || first_name == "") {
      first_name_input.setAttribute("class", "invalid");
      first_name_err.classList.remove("errorMessage");
    } else {
      if (last_name == null || last_name == "") {
        last_name_input.setAttribute("class", "invalid");
        last_name_err.classList.remove("errorMessage");
      } else {
        if (email_addr == null || email_addr == "") {
          email_addr_input.setAttribute("class", "invalid");
          email_addr_err.classList.remove("errorMessage");
        } else {
          if (company_site == null || company_site == "") {
            company_site_input.setAttribute("class", "invalid");
            company_site_err.classList.remove("errorMessage");
          } else {
            if (phone_num == null || phone_num == "") {
              phone_num_input.setAttribute("class", "invalid");
              phone_num_err.classList.remove("errorMessage");
            } else {
              alert("Success");
              company_name_input.classList.remove("invalid");
              first_name_input.classList.remove("invalid");
              last_name_input.classList.remove("invalid");
              email_addr_input.classList.remove("invalid");
              company_site_input.classList.remove("invalid");
              phone_num_input.classList.remove("invalid");

              company_name_err.setAttribute("class", "errorMessage");
              first_name_err.setAttribute("class", "errorMessage");
              last_name_err.setAttribute("class", "errorMessage");
              email_addr_err.setAttribute("class", "errorMessage");
              company_site_err.setAttribute("class", "errorMessage");
              phone_num_err.setAttribute("class", "errorMessage");
            }
          }
        }
      }
    }
  }
}

function accountValidator() {
  const time_zone = document.getElementById("time_zone");
  const sel_lang = document.getElementById("sel_lang");
  const sel_date = document.getElementById("sel_date");
  const sel_time = document.getElementById("sel_time");
  const sel_currency = document.getElementById("sel_currency");
  const sel_week = document.getElementById("sel_week");
  const sel_period = document.getElementById("sel_period");

  const payError = document.getElementById("pay_error_message");

  var strTimeZone = time_zone.options[time_zone.selectedIndex].value;
  var strSelLang = sel_lang.options[sel_lang.selectedIndex].value;
  var strSelDate = sel_date.options[sel_date.selectedIndex].value;
  var strSelTime = sel_time.options[sel_time.selectedIndex].value;
  var strSelCurrency = sel_currency.options[sel_currency.selectedIndex].value;
  var strSelWeek = sel_week.options[sel_week.selectedIndex].value;
  var strSelPeriod = sel_period.options[sel_period.selectedIndex].value;

  if (strTimeZone == 0) {
    time_zone.setAttribute("class", "invalid");
    alert("Time Zone");
  } else {
    if (strSelLang == 0) {
      alert("Language");
    } else {
      if (strSelDate == 0) {
        alert("Date");
      } else {
        if (strSelTime == 0) {
          alert("Time");
        } else {
          if (strSelCurrency == 0) {
            alert("Currency");
          } else {
            if (strSelWeek == 0) {
              alert("Week");
            } else {
              if (strSelPeriod == 0) {
                sel_period.setAttribute("class", "invalid");
                payError.classList.remove("errorMessage");
              } else {
                prompt("Success");
              }
            }
          }
        }
      }
    }
  }
}

function addressValidator() {
  const time_rnd = document.getElementById("time_rnd");
  const week_overtime = document.getElementById("week_overtime");
  const day_overtime = document.getElementById("day_overtime");
  const day_double = document.getElementById("day_double");
  const sat_overtime = document.getElementById("sat_overtime");
  const sun_overtime = document.getElementById("sun_overtime");
  const lunch_break = document.getElementById("lunch_break");
  const lunch_break_auto = document.getElementById("lunch_break_auto");

  var strTimeRnd = time_rnd.options[time_rnd.selectedIndex].value;
  var strWeekOvertime =
    week_overtime.options[week_overtime.selectedIndex].value;
  var strDayOvertime = day_overtime.options[day_overtime.selectedIndex].value;
  var strDayDouble = day_double.options[day_double.selectedIndex].value;
  var strSatOvertime = sat_overtime.options[sat_overtime.selectedIndex].value;
  var strSunOvertime = sun_overtime.options[sun_overtime.selectedIndex].value;
  var strLunchBreak = lunch_break.options[lunch_break.selectedIndex].value;
  var strLunchBreakAuto =
    lunch_break_auto.options[lunch_break_auto.selectedIndex].value;

  if (strTimeRnd == 0) {
    alert("Time Rounding");
  } else {
    if (strWeekOvertime == 0) {
      alert("Week Overtime");
    } else {
      if (strDayOvertime == 0) {
        alert("Day Overtime");
      } else {
        if (strDayDouble == 0) {
          alert("Day Double");
        } else {
          if (strSatOvertime == 0) {
            alert("Sat Overtime");
          } else {
            if (strSunOvertime == 0) {
              alert("Sun Overtime");
            } else {
              if (strLunchBreakAuto == 0) {
                alert("Lunch Break Auto");
              } else {
                if (strLunchBreak == 0) {
                  alert("Lunch Break");
                } else {
                  alert("Success");
                }
              }
            }
          }
        }
      }
    }
  }
}
