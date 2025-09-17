
from setuptools import setup, find_packages

with open('requirements.txt') as f:
    install_requires = [ln.strip() for ln in f if ln.strip()]

setup(
    name='supervalu_branding',
    version='0.0.1',
    description='Branding tweaks for Desk header',
    author='SuperValu',
    license='MIT',
    packages=find_packages(),
    include_package_data=True,
    install_requires=install_requires,
)
