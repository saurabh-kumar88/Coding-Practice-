import sys
import mathlib01
import pytest

# Commad : pytest -v -rxs --> to show the reason of skipping
# Comand : putest -k multiply -v --> run test those have sub string 'multiply'

# @pytest.mark.skip(reason="I dont want to run this method")
def test_cal_total():
    total = mathlib01.cal_total(1,4)
    assert total == 5
# @pytest.mark.skipif(sys.version_info > (3,5), reason="skipping if python version is greater then 2")
def test_cal_multiply():
    result = mathlib01.cal_multiply(3, 2)
    assert result == 6


# Command : pytest -m linux

@pytest.mark.windows
def test_windows_1():
    assert True

@pytest.mark.mac
def test_mac_1():
    assert True

@pytest.mark.linux
def test_linux_1():
    assert True